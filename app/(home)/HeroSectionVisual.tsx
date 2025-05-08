"use client"
import { ChartSpline, CircleUser, MessageCircleMore } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSectionVisual() {

  const title = useRef<HTMLHeadingElement>(null);
  const Application = useRef<HTMLSpanElement>(null);
  const featureTitle1 = useRef<HTMLHeadingElement>(null);
  const featureTitle2 = useRef<HTMLHeadingElement>(null);
  const featureTitle3 = useRef<HTMLHeadingElement>(null);
  const icon1 = useRef<SVGSVGElement>(null);
  const icon2 = useRef<SVGSVGElement>(null);
  const icon3 = useRef<SVGSVGElement>(null);

  const [titleStyles, setTitleStyles] = useState<React.ReactNode[]>([]);
  const [applicationStyles, setApplicationStyles] = useState<React.ReactNode[]>([]);
  const [iconStyles, setIconStyles] = useState<React.ReactNode[]>([]);
  const [featureTitleStyles, setFeatureTitleStyles] = useState<React.ReactNode[]>([]);

  const [animating, setAnimating] = useState(false);
  
  const transitions = [
    {
      name: "titleSize",
      styles: ["text-4xl", "font-black"],
      // todo: "font-black", "text-center", "ios:text-left", "ios:font-black"
      setStyles: setTitleStyles,
      refs: [title],
    },
    {
      name: "application",
      styles: [" text-fd-primary"],
      setStyles: setApplicationStyles,
      refs: [Application],
      delay: 300,
    },
    {
      name: "icons",
      styles: ["h-8", "w-8", "text-fd-primary"],
      setStyles: setIconStyles,
      refs: [icon1, icon2, icon3],
      delay: 2500,
    },
    {
      name: "featureTitles",
      styles: ["text-lg", "font-bold", "-mt-1.5"],
      setStyles: setFeatureTitleStyles,
      refs: [featureTitle1, featureTitle2, featureTitle3],
      delay: 4000,
    },
  ]

  const FEATURES = [
    {
      title: <h2 ref={featureTitle1} className="duration-300">Profile Management</h2>,
      description: 'Easily update and manage your personal information, settings, and preferences',
      icon: <CircleUser ref={icon1} className="duration-300" />,
    },
    {
      title: <h2 ref={featureTitle2} className="duration-300">Secure Messaging</h2>,
      description: 'Chat securely with friends and family in real-time.',
      icon:  <MessageCircleMore ref={icon2} className="duration-300" />,
    },
    {
      title: <h2 ref={featureTitle3} className="duration-300">Activity Tracking</h2>,
      description: 'Monitor your daily activities and track your progress over time.',
      icon: <ChartSpline ref={icon3} className="duration-300" />,
    },
  ];

  useEffect(() => {
    if (animating) return;
    setAnimating(true);
    transitions.forEach((transition, index) => {
      const stylesArray = [...transition.styles.join(' ').split('')];
      stylesArray.forEach((letter, i) => {
        setTimeout(() => {
          transition.setStyles((prev) => [...prev, <span key={`${transition.name}-${i}`} className="text-fd-primary animate-fade-to-gray">{letter}</span>]);
        },
          i * 100
          + (transitions[index - 1] ? transitions[index - 1].styles.join(' ').length * 100 : 0)
          + (transition.delay ? transition.delay : 0)
        );
      });
      transition.styles.forEach((style, i) => {
        setTimeout(() => {
          transition.refs.forEach((ref) => {
            ref.current?.classList.add(style.trim());
          })
        },
          (style.length) * 100
          + (transition.styles[i - 1] ? transition.styles[i - 1].split('').length + 5 : 0) * 100
          + (transitions[index - 1] ? transitions[index - 1].styles.join(' ').length * 100 : 0)
          + (transition.delay ? transition.delay : 0)
        );
      });
    })
    return () => {
      transitions.forEach((transition) => {
        transition.refs.forEach((ref) => {
          ref.current?.classList.remove(...transition.styles);
        })
        transition.setStyles([]);
      })
      setAnimating(false);
    }
  }, []);

  return (
    <div className="h-full w-full max-w-screen max-h-screen sm:max-h-[min(50vh,600px)] flex-1 flex justify-center border-t border-dashed">
      <div className="flex relative w-fit justify-center max-w-[calc(var(--spacing-fd-container)+0rem)]">
        {/* <div className="border p-1 rounded-full flex gap-1 absolute -top-4 -translate-y-full right-0 bg-fd-card">
          <div className="border p-1 rounded-full bg-fd-accent">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
          </div>
          <div className="border p-1 rounded-full bg-fd-accent">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-emerald-400" xmlns="http://www.w3.org/2000/svg"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"></path></svg>
          </div>
        </div> */}
        <div className="z-10 pointer-events-none absolute w-full h-full inset-0 bg-gradient-to-b from-fd-background/0 to-fd-background from-[calc(100%-15rem)]"/>
        <div className="flex lg:flex-row flex-col items-center relative overflow-hidden bg-fd-background/20 p-2 pb-0 min-w-fd-container">
          <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-fd-primary/20 blur-3xl max-md:hidden" />
          <div className="absolute top-0 right-0 -z-10 h-full w-[32rem] bg-grid-lines-lg -skew-20 -translate-y-1/2 translate-x-1/2 max-md:hidden"/>
          {/* import { Icon } from '@roninoss/icons';
          import { Link } from 'expo-router';
          import { Platform, View, type ViewStyle } from 'react-native';
          import { SafeAreaView } from 'react-native-safe-area-context';
          
          import { Button } from '~/components/nativewindui/Button';
          import { Text } from '~/components/nativewindui/Text';
          import { useColorScheme } from '~/lib/useColorScheme';
          
          const ROOT_STYLE: ViewStyle = { flex: 1 }; */}
          <pre className="font-mono sm:mb-0 w-full max-w-[calc(100vw-1rem)] min-h-96 relative text-start max-h-full p-4 lg:px-11 lg:py-4 overflow-hidden text-xs bg-fd-background/40 text-fd-foreground/50 backdrop-blur rounded-xl border [mask-image:linear-gradient(to_bottom,red_calc(100%-15rem),transparent)] sm:[mask-image:none]">
            <div className="absolute h-full border-r border-dashed left-8 top-0 max-lg:hidden"/>
            {/* line numbers */}
            <div className="absolute left-1.5 top-4 h-full flex flex-col gap-[0.25px] text-right max-lg:hidden">
              {Array.from({ length: 40 }, (_, i) => (
                <div key={i} className={`${[7, 10, 20, 25].includes(i+1) ? 'text-fd-primary' : 'text-fd-muted-foreground'} text-xs`}>{i + 1}</div>
              ))}
            </div>

{`export default function WelcomeConsentScreen() {

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="mx-auto max-w-sm flex-1 justify-between gap-4 px-8 py-4 ">
        <View className="ios:pt-8 pt-12">
`}
          <div className="whitespace-pre">
            {`          <Text className="`}
            {(titleStyles)}
            {`">`}
          </div>
{`              Welcome to your
          </Text>
`}
          <div className="whitespace-pre">
            {`          <Text className="`}
            {(titleStyles)}
            {(applicationStyles)}{`">`}
          </div>
          {`              Application
          </Text>
        </View>
        <View className="gap-8">
          {FEATURES.map((feature) => (
            <View key={feature.title} className="flex-row gap-4">
              <View className="pt-px">
                <Icon
                  name={feature.icon}
`}
          <div className="whitespace-pre">
            {`                  className="`}
            {(iconStyles)}
            {`"`}
          </div>
{`                  ios={{ renderingMode: 'hierarchical' }}
                />
              </View>
              <View className="flex-1">
`}
          <div className="whitespace-pre">
            {`                  <Text className="`}
            {(featureTitleStyles)}
            {`">{feature.title}</Text>`}
          </div>
{`                  <Text variant="footnote">{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const FEATURES = [
  {
    title: 'Profile Management',
    description: 'Easily update and manage your personal information, settings, and preferences',
    icon: 'account-circle-outline',
  },
  {
    title: 'Secure Messaging',
    description: 'Chat securely with friends and family in real-time.',
    icon: 'message-processing',
  },
  {
    title: 'Activity Tracking',
    description: 'Monitor your daily activities and track your progress over time.',
    icon: 'chart-timeline-variant',
  },
] as const;
//  oh hi there, how did you get here?
  `}
        </pre>
        {/* <div className="absolute h-full border-r border-dashed right-[42px] top-0"/> */}
        <div className="h-full relative min-h-96 overflow-clip sm:absolute sm:-right-20 sm:mt-2 -mt-32 sm:translate-y-1/4 sm:-translate-x-1/3 lg:translate-x-0 lg:translate-y-0 md:right-0 w-96 min-w-96 rounded-t-[4rem] lg:ml-2 border-8 border-black lg:relative bg-gradient-to-b from-fd-accent/20 backdrop-blur to-white dark:to-fd-card p-7 pt-24 text-start !border-b-0">
            
          <div className="w-24 h-8 rounded-full bg-black absolute top-4 left-1/2 -translate-x-1/2" />
            <h1 ref={title} className="duration-500 mb-20">
              Welcome to your<br/>
              <span ref={Application} className="duration-300 transition-colors">Application</span>
            </h1>
            <div className="flex flex-col gap-8 h-full">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10">
                    {feature.icon}
                  </div>
                  <div className="flex w-full flex-col">
                    {feature.title}
                    <p className="text-sm text-fd-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}