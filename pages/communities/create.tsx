import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { Heading } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

export default function Communities() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<{ name: string; description: string }>();
  return (
    <div>
      <Heading size={"2xl"}>Create Community</Heading>
    </div>
  );
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
