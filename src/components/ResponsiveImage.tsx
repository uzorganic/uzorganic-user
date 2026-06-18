import Image, { getImageProps } from 'next/image';

interface Props {
  src: string;
  alt: string;

  // 모바일 전용 크롭본(예: 9_mb.jpg). 지정하면 <picture>로 뷰포트당 한 장만 내려받는다.
  // 지정하지 않으면 기존처럼 next/image 한 장.
  mobileSrc?: string;

  // 화면 최상단(LCP) 이미지에만 true. 기본 lazy.
  priority?: boolean;

  className?: string;
}

export const ResponsiveImage = ({
  src,
  alt,
  mobileSrc,
  priority = false,
  className,
}: Props) => {
  if (!mobileSrc) {
    return (
      <Image
        className={className}
        src={src}
        alt={alt}
        fill
        sizes="100%"
        priority={priority}
      />
    );
  }

  // getImageProps로 두 크롭본의 srcSet만 뽑아 <picture>에 넘긴다.
  // <picture>는 매칭되는 <source> 하나만 받으므로 pc/mo 이중 다운로드가 사라진다.
  // ponytail: getImageProps는 <link rel=preload>를 만들지 않는다. LCP 힌트가 필요해지면
  // _document나 SEO에서 media 붙인 preload를 직접 넣을 것.
  const common = { alt, fill: true, sizes: '100vw', priority };
  const { props: mobile } = getImageProps({ ...common, src: mobileSrc });
  const { props: desktop } = getImageProps({ ...common, src });

  return (
    <picture>
      <source
        media="(max-width: 960px)"
        srcSet={mobile.srcSet}
        sizes={mobile.sizes}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...desktop}
        // getImageProps는 priority를 loading에만 반영하고 fetchPriority는 빼먹는다.
        fetchPriority={priority ? 'high' : undefined}
        className={className}
      />
    </picture>
  );
};
