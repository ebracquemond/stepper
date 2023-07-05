import { Step } from './step.model';

export interface Path extends Step {
  title: string;
  steps?: Step[];
}
