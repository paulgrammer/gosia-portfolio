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
    description:
      "An online language learning platform with virtual appointments.",
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
    title: "Scheduling",
    description: "Event Scheduling Service for the company",
    resources: [
      {
        desktop: "/scheduling/scheduling-1-desktop.png",
        mobile: "/scheduling/scheduling-1-mobile.png",
      },
      {
        desktop: "/scheduling/scheduling-2-desktop.png",
        mobile: "/scheduling/scheduling-2-mobile.png",
      },
      {
        desktop: "/scheduling/scheduling-3-desktop.png",
      },
      {
        desktop: "/scheduling/scheduling-4-desktop.png",
        mobile: "/scheduling/scheduling-4-mobile.png",
      },
      {
        desktop: "/scheduling/scheduling-5-desktop.png",
        mobile: "/scheduling/scheduling-5-mobile.png",
      },
      {
        desktop: "/scheduling/scheduling-6-desktop.png",
        mobile: "/scheduling/scheduling-6-mobile.png",
      },
      {
        desktop: "/scheduling/scheduling-7-desktop.png",
        mobile: "/scheduling/scheduling-7-mobile.png",
      },
    ],
  },
  {
    title: "Payments",
    description: "Payments Integration Service for the company",
    resources: [
      {
        desktop: "/payments/payment-1-desktop.png",
        mobile: "/payments/payment-1-mobile.png",
      },
      {
        desktop: "/payments/payment-2-desktop.png",
        mobile: "/payments/payment-2-mobile.png",
      },
      {
        desktop: "/payments/payment-3-desktop.png",
        mobile: "/payments/payment-3-mobile.png",
      },
      {
        desktop: "/payments/payment-4-desktop.png",
        mobile: "/payments/payment-4-mobile.png",
      },
    ],
  },
];
