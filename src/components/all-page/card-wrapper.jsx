"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const CardWrapper = ({
  headerLabel,
  headerDescription,
  isLarge,
  children,
  variant,
  footer = null
}) => {
  const width = isLarge ? 'w-[800px]' : 'w-[400px]';

  return (
    <Card className={cn("shadow-md", width, variant && 'absolute')}>
      <CardHeader>
        <CardTitle>
          {headerLabel}
        </CardTitle>
        <CardDescription>
          {headerDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {footer} 
      </CardFooter>
    </Card>
  );
};
