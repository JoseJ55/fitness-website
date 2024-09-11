export interface Review {
    name: string;
    review: string;
}

export interface Trainer {
    id: number;
    first_name: string;
    last_name: string;
    desc: string;
    photo: string;
    qualifications: string[];
    reviews: Review[];
}

export interface TrainerState {
    current_trainer: number;
    trainers: Trainer[];
}