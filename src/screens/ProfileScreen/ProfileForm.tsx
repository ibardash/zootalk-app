import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "UserContext";
import { ProfileFormStep1 } from "./ProfileFormStep1";
import { ProfileFormStep2 } from "./ProfileFormStep2";
import { ProfileFormStep3 } from "./ProfileFormStep3";
import { useCreateUserMutation } from "./createUser.generated";

export function ProfileForm() {
  const navigate = useNavigate();
  const { saveUserDetails } = useUserContext();
  const [createUser] = useCreateUserMutation();
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    zooId: "",
  });

  const submitForm = useCallback(
    async (profile) => {
      const { data } = await createUser({
        variables: profile,
      });

      if (!data?.createUser) return;

      saveUserDetails({
        id: data?.createUser.id,
      });

      navigate("/chat", { state: { userId: data?.createUser.id } });
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
