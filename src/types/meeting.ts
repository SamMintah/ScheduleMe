export interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  participants: string[];
  type: 'client' | 'freelancer' | 'team';
}