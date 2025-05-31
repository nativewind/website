"use client"
import { ChartSpline, CircleUser, MessageCircleMore, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSectionVisual() {

  const [platform, setPlatform] = useState<boolean>(true);

  const [titleIOS, setTitleIOS] = useState<string>('');
  const [titleAndroid, setTitleAndroid] = useState<string>('');
  const [applicationIOS, setApplicationIOS] = useState<string>('');
  const [applicationAndroid, setApplicationAndroid] = useState<string>('');
  const [featureTitleIOS, setFeatureTitleIOS] = useState<string>('');
  const [featureTitleAndroid, setFeatureTitleAndroid] = useState<string>('');
  const [iconIOS, setIconIOS] = useState<string>('');
  const [iconAndroid, setIconAndroid] = useState<string>('');

  const [titleStyles, setTitleStyles] = useState<React.ReactNode[]>([]);
  const [applicationStyles, setApplicationStyles] = useState<React.ReactNode[]>([]);
  const [iconStyles, setIconStyles] = useState<React.ReactNode[]>([]);
  const [featureTitleStyles, setFeatureTitleStyles] = useState<React.ReactNode[]>([]);
  
  const transitions = [
    {
      styles: "text-4xl text-center font-bold ios:text-left ios:font-black",
      forTailwindToParse: "!text-left !font-black",
      setIos: setTitleIOS,
      setAndroid: setTitleAndroid,
      setStyles: setTitleStyles,
    },
    {
      styles: " text-fd-primary",
      setIos: setApplicationIOS,
      setAndroid: setApplicationAndroid,
      setStyles: setApplicationStyles,
    },
    {
      styles: "h-8 w-8 text-fd-primary",
      setIos: setIconIOS,
      setAndroid: setIconAndroid,
      setStyles: setIconStyles,
    },
    {
      styles: "text-lg font-bold -mt-1.5",
      setIos: setFeatureTitleIOS,
      setAndroid: setFeatureTitleAndroid,
      setStyles: setFeatureTitleStyles,
    },
  ]

  const FEATURES = [
    {
      title: <h2 className={`duration-300 ${platform ? featureTitleIOS : featureTitleAndroid}`}>Profile Management</h2>,
      description: 'Easily update and manage your personal information, settings, and preferences',
      icon: <CircleUser className={`duration-300 ${platform ? iconIOS : iconAndroid}`} />,
    },
    {
      title: <h2 className={`duration-300 ${platform ? featureTitleIOS : featureTitleAndroid}`}>Secure Messaging</h2>,
      description: 'Chat securely with friends and family in real-time.',
      icon:  <MessageCircleMore className={`duration-300 ${platform ? iconIOS : iconAndroid}`} />,
    },
    {
      title: <h2 className={`duration-300 ${platform ? featureTitleIOS : featureTitleAndroid}`}>Activity Tracking</h2>,
      description: 'Monitor your daily activities and track your progress over time.',
      icon: <ChartSpline className={`duration-300 ${platform ? iconIOS : iconAndroid}`} />,
    },
  ];

  useEffect(() => {
    let prevTotalLength = 0;
    transitions.forEach((transition, index) => {
      const stylesArray = transition.styles.split('');
      const cnsArray = transition.styles.split(' ');
      let k = 0;
      prevTotalLength += transitions[index - 1] ? transitions[index - 1].styles.split(' ').join('').length : 0;
      stylesArray.forEach((letter, i) => {
        if (stylesArray[i-1 ] === ' ') prevTotalLength += 3; // smaller pause for spaces
        setTimeout(() => {
          if (letter === ' ' || i === stylesArray.length - 1) {
            if (cnsArray[k].startsWith('ios:')) {
              transition.setIos((prev) => prev + ` ${cnsArray[k-1].replace('ios:', '!')}`)
            } else {
              transition.setAndroid((prev) => prev + ` ${cnsArray[k-1]}`);
              transition.setIos((prev) => prev + ` ${cnsArray[k-1]}`);
            }
            k++;
          }
          transition.setStyles((prev) => [...prev, letter]);
        },
          (prevTotalLength + i) * 100
          + index * 1000 // larger pause between lines
        );
      });
      // transition.styles.forEach((style, i) => {
      //   setTimeout(() => {
      //     transition.refs.forEach((ref) => {
      //       if (style.trim().startsWith('ios:')) {
      //         style = style.trim().replace('ios:', '!');
      //         transition.setIos ? transition.setIos((prev) => prev + ` ${style.trim()}`) : null;
      //       } else {
      //         transition.setAndroid ? transition.setAndroid((prev) => prev + ` ${style.trim()}`) : null;
      //         transition.setIos ? transition.setIos((prev) => prev + ` ${style.trim()}`) : null;
      //       }
      //       // ref.current?.classList.add(style.trim());
      //     })
      //   },
      //     (style.length) * 100
      //     + (transition.styles[i - 1] ? transition.styles[i - 1].split('').length + 5 : 0) * 100
      //     + (transitions[index - 1] ? transitions[index - 1].styles.join(' ').length * 100 : 0)
      //     + (transition.delay ? transition.delay : 0)
      //   );
      // });
    })
  }, []);

  return (
    <div className="h-full w-full max-w-screen max-h-screen sm:max-h-[min(50vh,600px)] flex-1 flex justify-center border-t border-dashed">
      <div className="flex relative w-fit justify-center max-w-[calc(var(--spacing-fd-container)+0rem)]">

        <div className="z-10 pointer-events-none absolute w-full h-full inset-0 bg-gradient-to-b from-fd-background/0 to-fd-background from-[calc(100%-15rem)]" />
        
        <div className="flex lg:flex-row flex-col items-center relative bg-fd-background/20 p-2 pb-0 min-w-fd-container">
          <div className="w-full h-full overflow-hidden absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-fd-primary/20 blur-3xl max-md:hidden" />
            <div className="absolute top-0 right-0 -z-10 h-full w-[32rem] bg-grid-lines-lg -skew-20 -translate-y-1/2 translate-x-1/2 max-md:hidden" />
          </div>

          <pre className="font-mono sm:mb-0 w-full max-w-[calc(100vw-1rem)] lg:max-w-[calc(100%-25rem)] min-h-96 relative text-start max-h-full p-4 lg:px-11 lg:py-4 overflow-x-clip text-xs bg-fd-background/40 text-fd-foreground/50 backdrop-blur rounded-xl border sm:[mask-image:none] whitespace-pre-wrap sm:whitespace-pre">
            {/* [mask-image:linear-gradient(to_bottom,red_calc(100%-15rem),transparent)]  */}

            {/* Platform toggle */}
            <div className="border p-1 rounded-full flex gap-1 absolute max-sm:bottom-32 sm:top-2 xl:-top-4 xl:-translate-y-full sm:right-2 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-white dark:bg-black xl:right-0">
              <button onClick={() => setPlatform(true)}  className={`cursor-pointer p-1 rounded-full duration-300 stroke-current stroke-1 ${platform ? 'bg-fd-accent fill-black dark:fill-white text-transparent' : 'fill-transparent' } `}>
                <svg role="img" viewBox="0 0 26 26" className="h-5 w-5 translate-x-0.25" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
              </button>
              <button onClick={() => setPlatform(false)} className={`cursor-pointer p-1 rounded-full duration-300 stroke-current storke-1 ${platform ? 'storke-0 fill-transparent text-emerald-600 dark:text-emerald-400' : 'bg-fd-accent fill-emerald-600 dark:fill-emerald-400 text-transparent' }`}>
                <svg role="img" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"></path></svg>
              </button>
            </div>
            
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
          <div className="whitespace-pre-wrap sm:whitespace-pre">
            {`          <Text className="`}
              {titleStyles.map((style, i) => (
                <span key={`${style}-${i}`} className="text-fd-primary animate-fade-to-gray">{style}</span>
              ))}
            {`">`}
          </div>
{`              Welcome to your
          </Text>
`}
          <div className="whitespace-pre-wrap sm:whitespace-pre">
            {`          <Text className="`}
            {titleStyles.map((style, i) => (
                <span key={`${style}-${i}`} className="text-fd-primary animate-fade-to-gray">{style}</span>
            ))}
            {applicationStyles.map((style, i) => (
                <span key={`${style}-${i}`} className="text-fd-primary animate-fade-to-gray">{style}</span>
            ))}{`">`}
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
            {iconStyles.map((style, i) => (
              <span key={`${style}-${i}`} className="text-fd-primary animate-fade-to-gray">{style}</span>
            ))}
            {`"`}
          </div>
{`                  ios={{ renderingMode: 'hierarchical' }}
                />
              </View>
              <View className="flex-1">
`}
          <div className="whitespace-pre">
            {`                  <Text className="`}
            {featureTitleStyles.map((style, i) => (
              <span key={`${style}-${i}`} className="text-fd-primary animate-fade-to-gray">{style}</span>
            ))}
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
  `}
        </pre>
        {/* <div className="absolute h-full border-r border-dashed right-[42px] top-0"/> */}
          <div className={`h-full relative min-h-96 overflow-clip sm:absolute sm:-right-20 sm:mt-2 xl:h-[50rem] xl:sticky xl:top-20 xl:-mt-[47.25rem] xl:-mb-[19rem] -mt-32 sm:translate-y-1/4 sm:-translate-x-1/3 lg:translate-x-0 lg:translate-y-0 md:right-0 w-96 min-w-96 ${platform ? 'rounded-t-[4rem] xl:rounded-[4rem]' : 'rounded-t-[3rem] xl:rounded-[3rem]'} xl:!border-b-8 lg:ml-2 border-8 border-black lg:relative bg-gradient-to-b from-fd-accent/20 backdrop-blur to-white dark:to-fd-card p-7 pt-24 text-start !border-b-0 duration-300`}>
            
          {/* dynamic island / selfie hole */}
          <div className={`${platform ? 'w-24 h-8' : 'w-6 h-6' } rounded-full bg-black absolute top-4 left-1/2 -translate-x-1/2 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`} />
          <h1 className={`duration-500 mb-20 ${platform ? titleIOS : titleAndroid}`}>
            Welcome to your<br/>
            <span className={`duration-500 transition-colors ${platform ? applicationIOS : applicationAndroid}`}>
              Application
            </span>
          </h1>
          <div className="flex flex-col gap-8 h-full">
            {FEATURES.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10">
                  {feature.icon}
                </div>
                <div className="flex w-full flex-col">
                  {feature.title}
                  <p className="text-[0.8rem] font-normal text-fd-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
            <div className={`absolute bottom-40 left-1/2 -translate-x-1/2 hidden xl:flex items-baseline duration-300 ${platform ? 'translatey-0' : 'translate-y-4'}`}>
            <UserRound className={`stroke-fd-background size-5 duration-300 ${platform ? 'translate-x-1/4 fill-fd-primary/50' : 'translate-x-2/3 fill-fd-primary'}`} />
            <UserRound className={`stroke-fd-background fill-fd-primary duration-300 ${platform ? '-translate-x-1/4 size-6' : '-translate-x-2/3 size-5'}`} />
          </div>
            <div className={`absolute bottom-28 text-center text-[0.6rem] w-4/5 px-2 hidden xl:block duration-300 ${platform ? 'translatey-0' : 'translate-y-4'}`}>
            By pressing continue, you agree to our{' '}
              <span className="text-fd-primary">
                Terms of Service
              </span>
            {' '}and that you have read our{' '}
            <span className="text-fd-primary">
              Privacy Policy
            </span>
          </div>
          <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 ${platform ? 'rounded-xl' : 'rounded-3xl text-sm font-medium translate-y-4'} bg-fd-primary p-2 w-4/5 text-center text-fd-primary-foreground hidden xl:block duration-300`}>
            Continue
          </div>
          {/* nav pill */}
          <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full h-1.5 w-1/3 bg-black dark:bg-fd-muted-foreground hidden xl:block duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${platform ? 'translate-y-0' : 'translate-y-20'}`} />
            
          </div>
        </div>
      </div>
    </div>
  )
}