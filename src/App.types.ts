import { ComponentType, ElementType } from 'react';
import { BrowserRouterProps } from 'react-router-dom';

export interface IAppProps {
  Router?: ComponentType<BrowserRouterProps> | ElementType;
}
