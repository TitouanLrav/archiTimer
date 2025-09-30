export type MonsterType = 'monstre' | 'archimonstre' | 'boss';

export interface IMonster {
  id: number;
  nom: string;
  slug: string;
  type: MonsterType;
  image_url: string;
  etape: number;
  zone: string;
  sousZone: string;
  nom_normal: string;
}