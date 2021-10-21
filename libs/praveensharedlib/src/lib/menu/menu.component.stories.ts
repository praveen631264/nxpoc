import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MenuComponent } from './menu.component';

export default {
  title: 'MenuComponent',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MenuComponent>;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    menus:  [
      {
        path:"/landing", 
        name:"App1 Landing Page"
      }
    ],
}