import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from '@tabler/icons-react';
import colors from 'tailwindcss/colors';

import { Skill } from '@/components';

const SectionSkills = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Skill
        Icon={IconBrandJavascript}
        color={colors.yellow[500]}
        name="Javascript"
      />
      <Skill Icon={IconBrandHtml5} color={colors.orange[500]} name="Html" />
      <Skill Icon={IconBrandCss3} color={colors.blue[600]} name="Css" />
      <Skill
        Icon={IconBrandTypescript}
        color={colors.blue[500]}
        name="Typescript"
      />
      <Skill Icon={IconBrandReact} color={colors.sky[500]} name="React" />
      <Skill
        Icon={IconBrandTailwind}
        color={colors.blue[500]}
        name="Tailwindcss"
      />
      <Skill Icon={IconBrandNextjs} color={colors.blue[500]} name="Nextjs" />
      <Skill
        Icon={IconBrandFirebase}
        color={colors.yellow[400]}
        name="Firebase"
      />
      <Skill Icon={IconBrandGit} color={colors.red[600]} name="Git" />
    </div>
  );
};

export default SectionSkills;
