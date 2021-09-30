export interface StepModel {
    stepIndex: number;
    isComplete: boolean;
    stepName: string;
    isNavigable: boolean;
    isPortfolioStep: boolean;
    template?: any;
}