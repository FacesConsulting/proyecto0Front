export interface RankingDrInterface {
    doctors: DrInterface[]
}

export interface DrInterface {
    name: string;
    image: string;
    socialNetworks: SocialNetworksInterface[];
}

export interface SocialNetworksInterface {
    platform: string;
    url: string;
}