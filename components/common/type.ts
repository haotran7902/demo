export type SettingTab = "theme" | "language";

export type SettingTabItem = {
  id: SettingTab;
  label: string;
  icon: React.ReactNode;
};
