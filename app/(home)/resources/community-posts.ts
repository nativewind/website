import ExpoAutoResizingInput from "@/app/assets/expo-auto-resizing-input.png";
import ExpoBottomMenu from "@/app/assets/expo-bottom-menu.png";
import ExpoPlayground from "@/app/assets/expo-playground.png";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const posts = [
  {
    title: "Make It Animated",
    url: "https://www.makeitanimated.dev/",
    image: "https://www.makeitanimated.dev/images/og-large.png",
    description: "Real-World Mobile App Animations for Inspiration and Practical Usage",
    author: {
      name: 'Volodymyr',
      username: 'v_serbulenko',
      avatar: 'https://avatars.githubusercontent.com/u/115154506?v=4',
      github: "https://github.com/vvv-sss",
      twitter: "https://x.com/v_serbulenko",
    }
  },
  {
    title: "rn-primitives",
    url: "https://rnprimitives.com/",
    image: "https://rn-primitives.vercel.app/rn-primitives-og.png",
    description: "Unstyled universal components with a focus on accessibility. They offer a unified API across iOS, Android, and web platforms.",
    author: {
      name: 'Zach Nugent',
      username: 'mrzachnugent',
      avatar: 'https://avatars.githubusercontent.com/u/63797719?v=4',
      github: "https://github.com/mrzachnugent",
      twitter: "https://x.com/mrzachnugent",
    },
  },
  {
    title: "expo-playground",
    url: "https://github.com/thomino/expo-playground",
    image: "https://github.com/thomino/expo-playground/blob/main/assets/img/readme/readme.jpg?raw=true",
    description: "My expo playground. Will be adding screens and components as i play",
    author: {
      name: 'Thomino',
      username: 'thomino',
      avatar: 'https://avatars.githubusercontent.com/u/4378611?v=4',
      github: "https://github.com/thomino",
      twitter: "https://x.com/thomino",
    }
  },
  {
    title: "expo-auto-resizing-input",
    url: "https://github.com/rs-4/expo-auto-resizing-input",
    image: ExpoAutoResizingInput,
    description: "A React Native component that provides an auto-resizing text input with animated expansion, similar to modern messaging apps like iMessage or WhatsApp.",
    author: {
      name: 'Rayan',
      username: 'rs-4',
      avatar: 'https://avatars.githubusercontent.com/u/72416925?v=4',
      github: "https://github.com/rs-4",
      twitter: "https://x.com/rsStats_",
    }
  },
  {
    title: "expo-bottom-menu",
    url: "https://github.com/rs-4/expo-bottom-menu",
    image: ExpoBottomMenu,
    description: "A modern React Native floating bottom menu component with smooth animations, haptic feedback, blur overlay, and theme support. Features an expandable interface that transforms from a compact chat button to a full menu with customizable items.",
    author: {
      name: 'Rayan',
      username: 'rs-4',
      avatar: 'https://avatars.githubusercontent.com/u/72416925?v=4',
      github: "https://github.com/rs-4",
      twitter: "https://x.com/rsStats_",
    }
  },
  {
    title: "playground-expo",
    url: "https://github.com/rs-4/playground-expo",
    image: ExpoPlayground,
    description: "This playground is a section of the application dedicated to demonstrating and testing custom React Native components. It serves as an interactive showcase for components that can be reused in other projects.",
    author: {
      name: 'Rayan',
      username: 'rs-4',
      avatar: 'https://avatars.githubusercontent.com/u/72416925?v=4',
      github: "https://github.com/rs-4",
      twitter: "https://x.com/rsStats_",
    }
  }
]

export const shuffledPosts = shuffleArray(posts);
