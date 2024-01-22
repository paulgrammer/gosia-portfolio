type Resource = {
  desktop?: string;
  mobile?: string;
};

type Project = {
  title: string;
  description?: string;
  resources: Resource[];
};

export const projects: Project[] = [
  {
    title: "Axon Education System",
    description: "An online language learning platform with virtual appointments.",
    resources: [
      {
        desktop: "/axon/axon-login-desktop.png",
        mobile: "/axon/axon-login-mobile.png",
      },
      {
        desktop: "/axon/axon-teacher-reg-1-desktop.png",
        mobile: "/axon/axon-teacher-reg-1-mobile.png",
      },
      {
        desktop: "/axon/axon-teacher-reg-2-desktop.png",
        mobile: "/axon/axon-teacher-reg-2-mobile.png",
      },
      {
        desktop: "/axon/axon-profile-desktop.png",
        mobile: "/axon/axon-profile-mobile.png",
      },
    ],
  },
  {
    title: "Softphone",
    description:
      "Allows users to make telephone calls over the internet via a computer or smartphone",
    resources: [
      {
        desktop: "/softphone/softphone-1.png",
      },
      {
        desktop: "/softphone/softphone-2.png",
      },
      {
        desktop: "/softphone/softphone-3.png",
      },
      {
        desktop: "/softphone/softphone-4.png",
      },
      {
        desktop: "/softphone/softphone-5.png",
      },
    ],
  },
  {
    title: "Appointments",
    description:
      "Use automation to scale campaigns profitably and save time doing it.",
    resources: [
      {
        desktop: "https://preline.co/assets/img/mockups/img12.jpg",
        mobile: "https://preline.co/assets/img/mockups/img13.jpg",
      },
    ],
  },
  {
    title: "Appointments",
    description:
      "Use automation to scale campaigns profitably and save time doing it.",
    resources: [
      {
        desktop: "https://preline.co/assets/img/mockups/img12.jpg",
        mobile: "https://preline.co/assets/img/mockups/img13.jpg",
      },
    ],
  },
];
