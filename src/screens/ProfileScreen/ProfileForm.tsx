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

  const onStep1Submit = useCallback(
    (name: string) => {
      setProfile({ ...profile, name });
      setCurrentStep(1);
    },
    [profile]
  );

  const onStep2Submit = useCallback(
    (zooId: string) => {
      setProfile({ ...profile, zooId });
      setCurrentStep(2);
    },
    [profile]
  );

  const onStep3Submit = useCallback(
    async (avatar: string) => {
      setProfile({ ...profile, avatar });

      const { data } = await createUser({
        variables: { name: profile.name, zooId: profile.zooId },
      });

      if (!data?.createUser) return;

      saveUserDetails({
        id: data?.createUser.id,
      });

      navigate("/chat", { state: { userId: data?.createUser.id } });
    },
    [createUser, navigate, profile, saveUserDetails]
  );

  return (
    <>
      <ProfileFormStep1 current={currentStep === 0} onSubmit={onStep1Submit} />
      <ProfileFormStep2 current={currentStep === 1} onSubmit={onStep2Submit} />
      <ProfileFormStep3 current={currentStep === 2} onSubmit={onStep3Submit} />
    </>
  );
}
