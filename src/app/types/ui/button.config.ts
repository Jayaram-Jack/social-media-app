export interface ButtonConfig {
  name: string; // Text to display on the button
  onClick?: () => void; // Action to perform when the button is clicked
  className?: string; // Additional styling classes
  type?: ButtonType; // Button type
  disabled?: boolean; // Optional: Disabled state
}

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export interface ImageTypeConfig {
  imageUrl: string;
  altText: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className: string;
  onClick?: () => void;
}

export interface FigureConfig {
  figureImageConfig: ImageTypeConfig;
  figureCaptionConfig: CaptionConfig;
}

export interface CaptionConfig {
  captionName: string;
  className: string;
}

export interface FeedHeaderConfig extends FigureConfig {
  imageConfig: ImageTypeConfig;
}

export interface LinkTypeConfig {
  routeUrl: string;
  target?: string;
  title?: string;
  className: string;
  linkName?: string;
}

export interface Story {
  imageSrc: string;
  altText: string;
  caption: string;
  className?: string;
  id?: string;
  userId?: string;
}

// Can delete after adding db
export const imageButtonPropsData: ImageTypeConfig[] = [
  {
    imageUrl: "/accept.png",
    altText: "accept-icon",
    width: 16,
    height: 16,
    className: `w-4 h-4 rounded-full object-cover`,
  },
  {
    imageUrl: "/reject.png",
    altText: "reject-icon",
    width: 16,
    height: 16,
    className: `w-4 h-4 rounded-full object-cover`,
  },
];
export interface ActionTypeConfig {
  divider?: string;
  dividerClassName?: string;
  actionCount: string;
  actionCountClassName?: string;
  actionType: string;
  actionTypeClassName?: string;
}
export interface FeedActionConfig {
  imageProps: ImageTypeConfig;
  actionType: ActionTypeConfig;
}
export const FeedActionData = [
  {
    imageProps: {
      imageUrl: "/like.png",
      altText: "like-icon",
      width: 16,
      height: 16,
      className: `w-5 h-5 object-cover cursor-pointer`,
    },
    actionTypeData: {
      divider: "|",
      actionCount: "123",
      actionType: "likes",
    },
  },
  {
    imageProps: {
      imageUrl: "/comment.png",
      altText: "comment-icon",
      width: 16,
      height: 16,
      className: `w-5 h-5 object-cover cursor-pointer`,
    },
    actionTypeData: {
      divider: "|",
      actionCount: "1k",
      actionType: "shares",
    },
  },
  {
    imageProps: {
      imageUrl: "/share.png",
      altText: "share-icon",
      width: 16,
      height: 16,
      className: `w-5 h-5 object-cover cursor-pointer`,
    },
    actionTypeData: {
      divider: "|",
      actionCount: "200",
      actionType: "comments",
    },
  },
];

export const storiesData = [
  {
    imageSrc: "/albums.png",
    altText: "Your story image",
    caption: "Your Story",
  },
  {
    imageSrc: "/travel.svg",
    altText: "Friend 1 story image",
    caption: "Jayaram",
  },
  {
    imageSrc: "/stories.png",
    altText: "Friend 2 story image",
    caption: "Mohan",
  },
  { imageSrc: "/gift.png", altText: "Friend 8 story image", caption: "Sandy" },
  {
    imageSrc: "/courses.png",
    altText: "Friend 3 story image",
    caption: "Ravi Sudheer",
  },
  {
    imageSrc: "/albums.png",
    altText: "Friend 4 story image",
    caption: "Srinu mavayya thanuku",
  },
  {
    imageSrc: "/videos.png",
    altText: "Friend 5 story image",
    caption: "usha eluru atha 2num",
  },
  { imageSrc: "/date.png", altText: "Friend 6 story image", caption: "Jay" },
];

export const postTypesData = [
  {
    imageSrc: "/addimage.png",
    altText: "uploadImage",
    caption: "Image",
  },
  {
    imageSrc: "/addVideo.png",
    altText: "Video",
    caption: "Video",
  },
  {
    imageSrc: "/addEvent.png",
    altText: "Event",
    caption: "Event",
  },
  { imageSrc: "/poll.png", altText: "poll", caption: "Poll" },
];
