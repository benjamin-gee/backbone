import * as RadixTooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';

type TooltipProps = {
    content: string;
}

export const Tooltip = (props: TooltipProps) => {
    const { content } = props;

    return (
    <RadixTooltip.Provider>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>
        <button className="IconButton">
          <PlusIcon />
        </button>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className="RadixTooltipContent" sideOffset={5}>
            {content}
          <RadixTooltip.Arrow className="RadixTooltipArrow" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
    );
};