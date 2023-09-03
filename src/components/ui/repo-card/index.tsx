import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { abbreviateNumber, timeSince } from '@/lib/utils';
import { CircleIcon, StarIcon } from 'lucide-react';
import { LanguageColors } from './language-colors';
import Link from 'next/link';

export interface IRepoCardProps {
  name: string;
  fullName: string;
  description: string;
  language: string;
  updatedAt: Date;
}

export function RepoCard(props: IRepoCardProps) {
  const languageColor =
    LanguageColors[props.language] ?? LanguageColors['JavaScript'];

  return (
    <Link href={`https://github.com/${props.fullName}`} target="_blank">
      <Card className="flex h-full flex-col transition-all duration-300 hover:border-ring">
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
          </div>
        </CardHeader>
        <div className="grow" />
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon
                className="mr-1 h-3 w-3"
                style={{
                  fill: languageColor,
                  color: languageColor,
                }}
              />
              {props.language}
            </div>

            <div>Updated {timeSince(props.updatedAt)}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
