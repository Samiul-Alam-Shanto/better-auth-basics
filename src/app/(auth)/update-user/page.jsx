"use client";
import { updateUser } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const UpdateUserPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const resData = await updateUser({
      name: data.name,
    });
    console.log(resData);
    if (resData.data.status === true) {
      router.push("/profile");
    }
  };
  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Update
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default UpdateUserPage;
