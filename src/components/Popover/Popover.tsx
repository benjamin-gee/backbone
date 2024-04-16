import './Popover.css';
import * as RadixPopover from '@radix-ui/react-popover';

export const Popover = () =>  {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className="PopoverTrigger">Welcome to backbone</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className="PopoverContent">
          backbone is a webapp framework, complete with all the building blocks you need to build your own webapp. Including FE components, an internal API, and most commonly used BE tables needed for any webapp
          <RadixPopover.Arrow className="PopoverArrow"/>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
