import { useEffect, useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import cookie from 'cookiejs';
import styled from 'styled-components';

export const BannerHeader = () => {
  const [isBannerClosed, setIsBannerClosed] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBannerClosed = cookie.get('isBannerClosed');
      setIsBannerClosed(isBannerClosed === 'true');
    }
  }, []);

  const handleBannerClose = () => {
    if (typeof window !== 'undefined') {
      cookie.set('isBannerClosed', 'true', { expires: 1 });
      setIsBannerClosed(true);
    }
  };

  if (isBannerClosed) {
    return null;
  }

  return (
    <BannerHeaderStyled>
      <CloseOutlined onClick={handleBannerClose} />
    </BannerHeaderStyled>
  );
};

const BannerHeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem 1.5rem;

  font-size: 1.5rem;

  background-color: #f00;
`;
