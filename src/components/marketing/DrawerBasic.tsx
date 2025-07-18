import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/TremorDrawer"

export const DrawerBasic = () => (
  <div className="flex justify-center">
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Upgrade to Starter</Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Account Created Successfully</DrawerTitle>
          <DrawerDescription className="mt-1 text-sm">
            Your account has been created successfully. You can now login to
            your account. For more information, please contact us.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          This is they body of the drawer, content goes here.
        </DrawerBody>
        <DrawerFooter className="mt-6">
          <DrawerClose asChild>
            <Button
              className="mt-2 w-full sm:mt-0 sm:w-fit"
              variant="secondary"
            >
              Go back
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full sm:w-fit">Ok, got it!</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);