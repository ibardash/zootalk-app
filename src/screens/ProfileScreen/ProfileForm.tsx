import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileFormStep1 } from "./ProfileFormStep1";
import { ProfileFormStep2 } from "./ProfileFormStep2";

export function ProfileForm() {
  const navigate = useNavigate();
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
      setProfile({ ...profile, avatar });
      navigate("/chat");
    },
    [navigate, profile]
  );

  return (
    <>
      <ProfileFormStep1 current={currentStep === 0} onSubmit={onStep1Submit} />
      <ProfileFormStep2 current={currentStep === 1} onSubmit={onStep2Submit} />
      <ProfileFormStep2 current={currentStep === 2} onSubmit={onStep3Submit} />
    </>
  );
}
