import {
  Target, Handshake, Coins, LineChart,
  Headphones, Phone, Users, Banknote,
  MonitorSmartphone, Database, Megaphone, CreditCard, Workflow, BarChart3,
  Shield, Lock, Eye, FileCheck, ServerCog,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconName } from './data';

const iconMap: Record<IconName, LucideIcon> = {
  Target,
  Handshake,
  Coins,
  LineChart,
  Headphones,
  Phone,
  Users,
  Banknote,
  MonitorSmartphone,
  Database,
  Megaphone,
  CreditCard,
  Workflow,
  BarChart3,
  Shield,
  Lock,
  Eye,
  FileCheck,
  ServerCog,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
