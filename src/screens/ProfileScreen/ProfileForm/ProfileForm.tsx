import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "UserContext";
import { useCreateUserMutation } from "./createUser.generated";
import {
  ProfileFormStep1,
  ProfileFormStep2,
  ProfileFormStep3,
} from "./ProfileFormSteps";

interface Profile {
  name?: string;
  avatar?: string;
  zooId?: string;
}

export function ProfileForm() {
  const navigate = useNavigate();
  const { saveUserDetails } = useUserContext();
  const [createUser] = useCreateUserMutation();
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Profile>({});

  const submitForm = useCallback(
    async (profile) => {
      const { data } = await createUser({
        variables: profile,
      });

      if (!data?.createUser) return;

      saveUserDetails(data.createUser);
      navigate("/chat");
    },
    [createUser, navigate, saveUserDetails]
  );

  const onStep1Submit = useCallback(
    (name: string) => {
      const updatedProfile = { ...profile, name };

      setProfile(updatedProfile);
      setCurrentStep(1);
    },
    [profile]
  );

  const onStep2Submit = useCallback(
    (zooId: string) => {
      const updatedProfile = { ...profile, zooId };

      setProfile(updatedProfile);
      setCurrentStep(2);
    },
    [profile]
  );

  const onStep3Submit = useCallback(
    async (avatar: string) => {
      const updatedProfile = { ...profile, avatar };

      setProfile(updatedProfile);
      submitForm(updatedProfile);
    },
    [profile, submitForm]
  );

  return (
    <>
      <ProfileFormStep1 current={currentStep === 0} onSubmit={onStep1Submit} />
      <ProfileFormStep2 current={currentStep === 1} onSubmit={onStep2Submit} />
      <ProfileFormStep3 current={currentStep === 2} onSubmit={onStep3Submit} />
    </>
  );
}
