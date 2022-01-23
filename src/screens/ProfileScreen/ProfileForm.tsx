import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "UserContext";
import { ProfileFormStep1 } from "./ProfileFormStep1";
import { ProfileFormStep2 } from "./ProfileFormStep2";
import { ProfileFormStep3 } from "./ProfileFormStep3";
import { useCreateUserMutation } from "./createUser.generated";

export function ProfileForm() {
  const navigate = useNavigate();
  const { saveUserDetails } = useUserContext();
  const [createUser, { data, loading, error }] = useCreateUserMutation();

  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    zooLocation: "",
  });

  const onStep1Submit = useCallback(
    (name: string) => {
      setProfile({ ...profile, name });
      setCurrentStep(1);
    },
    [profile]
  );

  const onStep2Submit = useCallback(
    (zooLocation: string) => {
      setProfile({ ...profile, zooLocation });
      setCurrentStep(2);
    },
    [profile]
  );

  const onStep3Submit = useCallback(
    (avatar: string) => {
      createUser({
        variables: { name: profile.name, zooId: profile.zooLocation },
      });
      setProfile({ ...profile, avatar });
    },
    [createUser, profile]
  );

  useEffect(() => {
    if (loading || error || !data?.createUser) return;

    saveUserDetails({
      id: data?.createUser.id,
    });

    navigate("/chat");
  }, [data?.createUser, error, loading, saveUserDetails, navigate]);

  return (
    <>
      <ProfileFormStep1 current={currentStep === 0} onSubmit={onStep1Submit} />
      <ProfileFormStep2 current={currentStep === 1} onSubmit={onStep2Submit} />
      <ProfileFormStep3 current={currentStep === 2} onSubmit={onStep3Submit} />
    </>
  );
}
