import React, { useEffect, useMemo, useState } from 'react';
import { useUserJoinStore } from '@/store/userJoinStore';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
// import UploadImage from '@/components/Auth/UploadImage';
import * as A from '@/styles/auth.styles';
import useInput from '@/hooks/useInput';
import AuthInput from '../AuthInput';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import Image from 'next/image';

export const inputProps = {
  variant: 'flushed',
  borderColor: 'outlineColor',
  focusBorderColor: 'inputFocusColor',
};

function StepThree() {
  const router = useRouter();
  const { me, onSaveSignup } = useUserJoinStore();
  // const [phone, onChangePhone] = useInput(me?.phone ?? '');
  const [phone, setPhone] = useState(me?.phone ?? '');

  const [firstNum, onChangeFirstNum] = useInput('');
  const [secondNum, onChangeSecondNum] = useInput('');
  const [thirdNum, onChangeThirdNum] = useInput('');

  const [values, setValues] = useState({ profileIMG: '' });
  const [profileUrl, setProfileUrl] = useState('');

  // console.log('me', me);

  useEffect(() => {
    const combinedPhone = `${firstNum}-${secondNum}-${thirdNum}`;
    setPhone(combinedPhone);
  }, [firstNum, secondNum, thirdNum]);

  const isDisabled = useMemo(() => Boolean(!phone), [phone]);

  interface IFormInput {
    phone1: string;
    phone2: string;
    phone3: string;
  }

  const onClickNext = (data: IFormInput) => {
    console.log('data', data);
    const { phone1, phone2, phone3 } = data;
    const phone = `${phone1}-${phone2}-${phone3}`;

    if (Object.keys(errors).length === 0) {
      onSaveSignup({ ...me, phone });
      router.push('/join/complete');
    }
  };

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();

  const isProfileOversize = (size: number) => {
    // 2MB
    if (size > 1024 * 1024 * 2) {
      alert('이미지가 너무 큽니다.');
      return false;
    }
    return true;
  };

  const handleProfileIMG = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.value);
    if (e.target.files) {
      const file = e.target.files[0];
      setProfileUrl(file.name);

      if (!isProfileOversize(file.size)) return;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setValues({ profileIMG: reader.result.toString() });
        }
      };
    }
  };
  console.log('profileUrl>>>', profileUrl);

  return (
    <form onSubmit={handleSubmit(onClickNext)}>
      {/* 프로필 이미지 */}
      <A.ProfileWrapper>
        <FormLabel>프로필</FormLabel>
        <A.ProfileFigure>
          {values['profileIMG'] && <Image width={150} height={150} src={values['profileIMG']} alt="프로필" />}
        </A.ProfileFigure>
        <A.ProfileIMGWrapper>
          <Input
            colorScheme="teal"
            variant="outline"
            type="file"
            accept=".jpg, .jpeg, .webp, .png, .gif, .svg"
            placeholder="파일선택"
            onChange={handleProfileIMG}
            value=""
          />
        </A.ProfileIMGWrapper>
      </A.ProfileWrapper>

      {/* 이름 */}
      <A.InputContainer>
        <FormControl isInvalid={Boolean(errors.phone)}>
          <FormLabel htmlFor="phone1">휴대폰 번호</FormLabel>
          <A.PhoneNumWrapper>
            <Input
              id="phone1"
              placeholder="010"
              variant="flushed"
              borderColor="outlineColor"
              focusBorderColor="inputFocusColor"
              type="number"
              maxLength={3}
              {...register('phone1', {
                required: '이름은 필수 입력사항 입니다.',
                pattern: {
                  value: /^\d{3}$/,
                  message: '3자리 숫자만 입력 가능합니다.',
                },
              })}
            />
            <Input
              id="phone2"
              placeholder="xxxx"
              variant="flushed"
              borderColor="outlineColor"
              focusBorderColor="inputFocusColor"
              type="number"
              maxLength={4}
              {...register('phone2', {
                required: '이름은 필수 입력사항 입니다.',
                pattern: {
                  value: /^\d{4}$/,
                  message: '3자리 숫자만 입력 가능합니다.',
                },
              })}
            />
            <Input
              id="phone3"
              placeholder="xxxx"
              variant="flushed"
              borderColor="outlineColor"
              focusBorderColor="inputFocusColor"
              type="number"
              maxLength={4}
              {...register('phone3', {
                required: '이름은 필수 입력사항 입니다.',
                pattern: {
                  value: /^\d{4}$/,
                  message: '3자리 숫자만 입력 가능합니다.',
                },
              })}
            />
          </A.PhoneNumWrapper>
          <FormErrorMessage>{errors.phone && errors.phone?.message?.toString()}</FormErrorMessage>
        </FormControl>
      </A.InputContainer>

      <A.ConfirmButton colorScheme="teal" size="md" type="submit">
        다음
      </A.ConfirmButton>
    </form>
  );
}

export default StepThree;
