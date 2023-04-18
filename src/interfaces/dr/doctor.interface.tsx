export interface RankingDrInterface {
    doctors: DrInterface[]
}

export interface DrInterface {
    id: number;
    name: string;
    image: string;
    socialNetworks: SocialNetworksInterface[];
}

export interface SocialNetworksInterface {
    platform: string;
    url: string;
}