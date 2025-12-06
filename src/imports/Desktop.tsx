import svgPaths from "./svg-mzil336qsi";
import imgBgImage from "figma:asset/c8f0d3f13ac7dd476288c0403bdca511610a696b.png";
import imgHeroImage from "figma:asset/013a8d1f9bfd97354677e6e611c314b3d894e9ce.png";
import imgHeroImage1 from "figma:asset/787f6fe36329cedaf5da3b0f31092bec8f8c3da0.png";
import imgHeroImage2 from "figma:asset/3b4654b781f5656cf586bf63df0ec8d0e553e20b.png";
import imgBgImage1 from "figma:asset/466f75350a19b899ab2540393026dad8f7fe0bf9.png";

function BgImage() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[-0.21px] top-0"
      data-name="BG Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[121.86%] left-0 max-w-none top-[-10.93%] w-full"
          src={imgBgImage}
        />
      </div>
    </div>
  );
}

function PageSectionOverlay() {
  return (
    <div
      className="absolute bg-[#090603] inset-[-2.96%_-2.8%_-3.07%_-3.2%] opacity-[0.55]"
      data-name="Page Section Overlay"
    />
  );
}

function Component() {
  return (
    <div
      className="relative shrink-0 size-[14px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_1_1119)" id="Component 1">
          <path
            d={svgPaths.pdb52f00}
            fill="var(--fill-0, #FE891F)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1119">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function C36J8IpdQiwrXr6ZpEDoo64RUSvgFill() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]"
      data-name="c36j8ipdQiwrXr6ZpEDoo64rU.svg fill"
    >
      <Component />
    </div>
  );
}

function StarIcon() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="Star Icon"
    >
      <C36J8IpdQiwrXr6ZpEDoo64RUSvgFill />
    </div>
  );
}

function StarIcon1() {
  return (
    <div
      className="relative shrink-0 size-[14px]"
      data-name="Star Icon"
    >
      <StarIcon />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[14px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          Coming soon • Join the waitlist
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function HeroRating() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0"
      data-name="Hero Rating"
    >
      <StarIcon1 />
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[758px]">
      <div className="basis-0 flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px opacity-75 relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px]">
        <p className="leading-[25px]">{`DevAsign helps open-source project maintainers review contributors code, give detailed feedback & automate bounty payout when needed.`}</p>
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full"
      data-name="Hero Title"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[64px] text-center text-white tracking-[-3.2px] w-[min-content]">
        <p className="leading-[normal]">
          Review code and automate bounty payouts with AI
        </p>
      </div>
      <Frame1 />
    </div>
  );
}

function ButtonText() {
  return (
    <div
      className="bg-[#fe891f] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[28px] py-[14px] relative shrink-0"
      data-name="Button Text"
    >
      <div className="flex flex-col font-['Geist_Mono:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#090603] text-[15px] text-nowrap tracking-[-0.3px]">
        <p className="leading-[normal] whitespace-pre">
          Join Waitlist
        </p>
      </div>
    </div>
  );
}

function HeroButtons() {
  return (
    <div
      className="content-center flex flex-wrap gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full"
      data-name="Hero Buttons"
    >
      <ButtonText />
    </div>
  );
}

function HeroContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-[950px]"
      data-name="Hero Content"
    >
      <HeroRating />
      <HeroTitle />
      <HeroButtons />
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="h-[560px] relative w-[396.97px]"
      data-name="Hero Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full left-[3.02%] max-w-none top-0 w-[93.95%]"
          src={imgHeroImage}
        />
      </div>
    </div>
  );
}

function HeroImage1() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[-0.01px] top-0"
      data-name="Hero Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full left-[5.18%] max-w-none top-0 w-[89.65%]"
          src={imgHeroImage1}
        />
      </div>
    </div>
  );
}

function HeroImage2() {
  return (
    <div
      className="h-[560px] relative w-[417.86px]"
      data-name="Hero Image"
    >
      <HeroImage1 />
    </div>
  );
}

function HeroImage3() {
  return (
    <div
      className="h-[560px] relative w-[396.97px]"
      data-name="Hero Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full left-[3.02%] max-w-none top-0 w-[93.95%]"
          src={imgHeroImage2}
        />
      </div>
    </div>
  );
}

function HeroImageList() {
  return (
    <div
      className="box-border content-stretch flex h-[600px] items-center justify-center min-h-[600px] pl-0 pr-[3.9px] py-[20px] relative shrink-0 w-full"
      data-name="Hero Image List"
    >
      <div
        className="flex h-[615.248px] items-center justify-center mr-[-3.9px] relative shrink-0 w-[393.107px]"
        style={
          {
            "--transform-inner-width": "396.96875",
            "--transform-inner-height": "560",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[8deg] skew-x-[7.923deg]">
          <HeroImage />
        </div>
      </div>
      <div
        className="flex h-[618.155px] items-center justify-center mr-[-3.9px] relative shrink-0 w-[413.793px]"
        style={
          {
            "--transform-inner-width": "417.859375",
            "--transform-inner-height": "560",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[8deg] skew-x-[7.923deg]">
          <HeroImage2 />
        </div>
      </div>
      <div
        className="flex h-[615.248px] items-center justify-center mr-[-3.9px] relative shrink-0 w-[393.107px]"
        style={
          {
            "--transform-inner-width": "396.96875",
            "--transform-inner-height": "560",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[8deg] skew-x-[7.923deg]">
          <HeroImage3 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[50px] items-center max-w-[1260px] px-[30px] py-0 relative shrink-0"
      data-name="Container"
    >
      <HeroContent />
      <HeroImageList />
    </div>
  );
}

function PageContentOverlayBottom() {
  return (
    <div
      className="absolute bg-[#090603] blur-[15px] bottom-[-80px] filter h-[300px] left-0 right-0"
      data-name="Page Content Overlay Bottom"
    />
  );
}

function OverlayShadow() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.2)] bottom-[0.21px] right-[-0.99px] rounded-[1px] shadow-[0px_0px_6px_1px_rgba(255,255,255,0.6)] top-0 w-[1.573px]"
      data-name="Overlay+Shadow"
    />
  );
}

function DecorationLine() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative rounded-[2px] shrink-0 to-[rgba(255,255,255,0)] w-full"
      data-name="Decoration Line"
    >
      <OverlayShadow />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col h-[0.79px] items-start justify-center opacity-[0.17] relative w-[78.51px]"
      data-name="Container"
    >
      <DecorationLine />
    </div>
  );
}

function ScfLogo() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[123.125px]"
      data-name="scf-logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 124 40"
      >
        <g id="scf-logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c7e5480}
            fill="var(--fill-0, #F0F0EE)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClientItem() {
  return (
    <div
      className="content-stretch flex gap-[15px] items-center justify-center overflow-clip relative shrink-0"
      data-name="Client Item"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.28px]">
        <p className="leading-[normal] whitespace-pre">
          Backed by
        </p>
      </div>
      <ScfLogo />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-center left-1/2 max-w-[1220px] px-[30px] py-0 top-[1112px] translate-x-[-50%]"
      data-name="Container"
    >
      <ClientItem />
    </div>
  );
}

function SectionHeroSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Section - Hero Section"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pb-[30px] pt-[190px] px-[330px] relative w-full">
          <BgImage />
          <PageSectionOverlay />
          <Container2 />
          <PageContentOverlayBottom />
          <div
            className="absolute flex h-[30.9px] items-center justify-center left-[472.44px] top-[7.9px] w-[72.785px]"
            style={
              {
                "--transform-inner-width": "78.5",
                "--transform-inner-height": "0.78125",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[22.6deg]">
              {[...Array(2).keys()].map((_, i) => (
                <Container3 key={i} />
              ))}
            </div>
          </div>
          <div
            className="absolute flex h-[30.9px] items-center justify-center left-[422.44px] top-[117.9px] w-[72.785px]"
            style={
              {
                "--transform-inner-width": "78.5",
                "--transform-inner-height": "0.78125",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[22.6deg]" />
          </div>
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Light',sans-serif] font-light justify-center leading-[0] opacity-90 relative shrink-0 text-[40px] text-center text-white tracking-[-2px] w-full">
        <p className="leading-[normal]">
          The smartest way to manage open-source development
        </p>
      </div>
    </div>
  );
}

function SectionTItle() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[600px]"
      data-name="Section TItle"
    >
      <Container5 />
    </div>
  );
}

function TdesignInstallFilled() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="tdesign:install-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tdesign:install-filled">
          <path
            d={svgPaths.p161c9780}
            fill="var(--fill-0, #FE891F)"
            id="Vector"
          />
          <path
            d={svgPaths.p1af15100}
            fill="var(--fill-0, #FE891F)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconWrap() {
  return (
    <div
      className="bg-[#090603] content-stretch flex flex-col items-center justify-center relative rounded-[30px] shrink-0 size-[60px]"
      data-name="Step Icon Wrap"
    >
      <TdesignInstallFilled />
      <div
        className="absolute inset-0 rounded-[30px]"
        data-name="Border"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[30px]"
        />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-amber-100 tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Install DevAsign app</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Get started by installing DevAsign GitHub app to your
          project and grant it the required access.
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
    </div>
  );
}

function StepTitleWrap() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full"
      data-name="Step Title Wrap"
    >
      <Container7 />
      <Container9 />
    </div>
  );
}

function StepContent() {
  return (
    <div
      className="bg-[rgba(19,19,19,0.5)] relative self-stretch shrink-0 w-[364.66px]"
      data-name="Step Content"
    >
      <div className="box-border content-stretch flex flex-col gap-[30px] h-full items-start overflow-clip p-[40px] relative rounded-[inherit] w-[364.66px]">
        <StepIconWrap />
        <StepTitleWrap />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(254,137,31,0.15)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Github() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="github"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_1110)" id="github">
          <path
            d={svgPaths.p397c3400}
            fill="var(--fill-0, #FE891F)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1110">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StepIconWrap1() {
  return (
    <div
      className="bg-[#090603] content-stretch flex flex-col items-center justify-center relative rounded-[30px] shrink-0 size-[60px]"
      data-name="Step Icon Wrap"
    >
      <Github />
      <div
        className="absolute inset-0 rounded-[30px]"
        data-name="Border"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[30px]"
        />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-amber-100 tracking-[-0.4px] w-full">
        <p className="leading-[normal]">
          Scan repo for open PRs
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">{`Our AI analyzes the repo’s to find patterns. Issues & open PRs are matched for review, test and feedback.`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container12 />
    </div>
  );
}

function StepTitleWrap1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full"
      data-name="Step Title Wrap"
    >
      <Container11 />
      <Container13 />
    </div>
  );
}

function StepContent1() {
  return (
    <div
      className="bg-[rgba(19,19,19,0.5)] relative self-stretch shrink-0 w-[364.67px]"
      data-name="Step Content"
    >
      <div className="box-border content-stretch flex flex-col gap-[30px] h-full items-start overflow-clip p-[40px] relative rounded-[inherit] w-[364.67px]">
        <StepIconWrap1 />
        <StepTitleWrap1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(254,137,31,0.15)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function PullRequest() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="pull-request"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="pull-request">
          <path
            d={svgPaths.p96e8c00}
            fill="var(--fill-0, #FE891F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StepIconWrap2() {
  return (
    <div
      className="bg-[#090603] content-stretch flex flex-col items-center justify-center relative rounded-[30px] shrink-0 size-[60px]"
      data-name="Step Icon Wrap"
    >
      <PullRequest />
      <div
        className="absolute inset-0 rounded-[30px]"
        data-name="Border"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[30px]"
        />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-amber-100 tracking-[-0.4px] w-full">
        <p className="leading-[normal]">{`Review PR for merge `}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Receive structured analysis and actionable feedback
          that can be sent to individual contributor to
          implement.
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
    </div>
  );
}

function StepTitleWrap2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full"
      data-name="Step Title Wrap"
    >
      <Container15 />
      <Container17 />
    </div>
  );
}

function StepContent2() {
  return (
    <div
      className="bg-[rgba(19,19,19,0.5)] relative self-stretch shrink-0 w-[364.66px]"
      data-name="Step Content"
    >
      <div className="box-border content-stretch flex flex-col gap-[30px] h-full items-start overflow-clip p-[40px] relative rounded-[inherit] w-[364.66px]">
        <StepIconWrap2 />
        <StepTitleWrap2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(254,137,31,0.15)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function StepList() {
  return (
    <div
      className="content-stretch flex gap-[50px] items-start justify-center relative shrink-0 w-full"
      data-name="Step List"
    >
      <StepContent />
      <StepContent1 />
      <StepContent2 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[50px] items-center max-w-[1260px] px-[30px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SectionTItle />
      <StepList />
    </div>
  );
}

function SectionHowItWorkSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Section - How It Work Section"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[330px] py-[50px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[0.605px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Geist_Mono:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-2px] w-full">
        <p className="leading-[normal]">
          Powerful tools for modern open-source development
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Code Review</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[521.5px]"
      data-name="Container"
    >
      <Container19 />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="h-[7px] relative shrink-0 w-[11.2px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 7"
      >
        <g clipPath="url(#clip0_1_1107)" id="Component 1">
          <path
            d="M0.7 1.05L5.6 5.95L10.5 1.05"
            id="Vector"
            stroke="var(--stroke-0, #999999)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1107">
            <rect fill="white" height="7" width="11.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0SvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[7px] items-center justify-center overflow-clip px-[1.4px] py-0 relative shrink-0 w-[14px]"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg fill"
    >
      <Component1 />
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0Svg() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg"
    >
      <YytPfOuBzcklEye4BrIeGy0SvgFill />
    </div>
  );
}

function AccordionIcon() {
  return (
    <div
      className="h-[7px] relative w-[14px]"
      data-name="Accordion Icon"
    >
      <YytPfOuBzcklEye4BrIeGy0Svg />
    </div>
  );
}

function AccordionHeading() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between overflow-clip px-0 py-[15px] relative shrink-0 w-full z-[3]"
      data-name="Accordion Heading"
    >
      <Container20 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <AccordionIcon />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Find, review and test quality PRs, and recommend merge
          based on project impact and contributor reliability.
        </p>
      </div>
    </div>
  );
}

function AccordionContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-0 px-0 relative shrink-0 w-full z-[1]"
      data-name="Accordion Content"
    >
      <Container21 />
    </div>
  );
}

function AccordionItemOpen() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-[535.5px]"
      data-name="Accordion Item Open"
    >
      <AccordionHeading />
      <div
        className="absolute bottom-[-0.44%] left-0 right-0 top-0 z-[2]"
        data-name="HorizontalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none"
        />
      </div>
      <AccordionContent />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Feedback Loop</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[521.5px]"
      data-name="Container"
    >
      <Container22 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="h-[7px] relative shrink-0 w-[11.2px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 7"
      >
        <g clipPath="url(#clip0_1_1107)" id="Component 1">
          <path
            d="M0.7 1.05L5.6 5.95L10.5 1.05"
            id="Vector"
            stroke="var(--stroke-0, #999999)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1107">
            <rect fill="white" height="7" width="11.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0SvgFill1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[7px] items-center justify-center overflow-clip px-[1.4px] py-0 relative shrink-0 w-[14px]"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg fill"
    >
      <Component3 />
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0Svg1() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg"
    >
      <YytPfOuBzcklEye4BrIeGy0SvgFill1 />
    </div>
  );
}

function AccordionIcon1() {
  return (
    <div
      className="h-[7px] relative w-[14px]"
      data-name="Accordion Icon"
    >
      <YytPfOuBzcklEye4BrIeGy0Svg1 />
    </div>
  );
}

function AccordionHeading1() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between overflow-clip px-0 py-[15px] relative shrink-0 w-full z-[3]"
      data-name="Accordion Heading"
    >
      <Container23 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <AccordionIcon1 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Provide constructive and actionable feedback to help
          contributors improve their code using AI.
        </p>
      </div>
    </div>
  );
}

function AccordionContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-0 px-0 relative shrink-0 w-full z-[1]"
      data-name="Accordion Content"
    >
      <Container24 />
    </div>
  );
}

function AccordionItemOpen1() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-[535.5px]"
      data-name="Accordion Item Open"
    >
      <AccordionHeading1 />
      <div
        className="absolute bottom-[-0.44%] left-0 right-0 top-0 z-[2]"
        data-name="HorizontalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none"
        />
      </div>
      <AccordionContent1 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Bounty Automation</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[521.5px]"
      data-name="Container"
    >
      <Container25 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="h-[7px] relative shrink-0 w-[11.2px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 7"
      >
        <g clipPath="url(#clip0_1_1107)" id="Component 1">
          <path
            d="M0.7 1.05L5.6 5.95L10.5 1.05"
            id="Vector"
            stroke="var(--stroke-0, #999999)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1107">
            <rect fill="white" height="7" width="11.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0SvgFill2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[7px] items-center justify-center overflow-clip px-[1.4px] py-0 relative shrink-0 w-[14px]"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg fill"
    >
      <Component4 />
    </div>
  );
}

function YytPfOuBzcklEye4BrIeGy0Svg2() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="YytPfOuBZCKLEye4BrIEGy0.svg"
    >
      <YytPfOuBzcklEye4BrIeGy0SvgFill2 />
    </div>
  );
}

function AccordionIcon2() {
  return (
    <div
      className="h-[7px] relative w-[14px]"
      data-name="Accordion Icon"
    >
      <YytPfOuBzcklEye4BrIeGy0Svg2 />
    </div>
  );
}

function AccordionHeading2() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between overflow-clip px-0 py-[15px] relative shrink-0 w-full z-[3]"
      data-name="Accordion Heading"
    >
      <Container26 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <AccordionIcon2 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">{`Add bounties to tasks/issues and automate payouts to contributors once PR is tested & merged.`}</p>
      </div>
    </div>
  );
}

function AccordionContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-0 px-0 relative shrink-0 w-full z-[1]"
      data-name="Accordion Content"
    >
      <Container27 />
    </div>
  );
}

function AccordionItemOpen2() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-[535.5px]"
      data-name="Accordion Item Open"
    >
      <AccordionHeading2 />
      <div
        className="absolute bottom-[-0.44%] left-0 right-0 top-0 z-[2]"
        data-name="HorizontalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none"
        />
      </div>
      <AccordionContent2 />
    </div>
  );
}

function AccordionList() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[2px] pt-0 px-0 relative shrink-0"
      data-name="Accordion List"
    >
      <AccordionItemOpen />
      <AccordionItemOpen1 />
      <AccordionItemOpen2 />
    </div>
  );
}

function ButtonText1() {
  return (
    <div
      className="bg-amber-100 box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[28px] py-[14px] relative shrink-0"
      data-name="Button Text"
    >
      <div className="flex flex-col font-['Geist_Mono:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#090603] text-[15px] text-nowrap tracking-[-0.3px]">
        <p className="leading-[normal] whitespace-pre">
          Join Waitlist
        </p>
      </div>
    </div>
  );
}

function BenefitSectionTitle() {
  return (
    <div
      className="content-stretch flex flex-col gap-[30px] items-start overflow-clip relative shrink-0 w-[570px]"
      data-name="Benefit Section Title"
    >
      <Heading />
      <AccordionList />
      <ButtonText1 />
    </div>
  );
}

function Right() {
  return (
    <div
      className="absolute h-[398.937px] left-[calc(50%+219.5px)] top-[calc(50%-3.53px)] translate-x-[-50%] translate-y-[-50%] w-[603.003px]"
      data-name="right"
    >
      <div className="absolute inset-[-0.17%_-0.88%_-2.82%_-0.96%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 615 411"
        >
          <g id="right">
            <g filter="url(#filter0_d_1_1166)" id="Vector 2">
              <path
                d={svgPaths.p303b9e40}
                shapeRendering="crispEdges"
                stroke="url(#paint0_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter1_d_1_1166)" id="Vector 3">
              <path
                d={svgPaths.p1b10d800}
                shapeRendering="crispEdges"
                stroke="url(#paint1_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter2_d_1_1166)" id="Vector 4">
              <path
                d={svgPaths.p15de44e0}
                shapeRendering="crispEdges"
                stroke="url(#paint2_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter3_d_1_1166)" id="Vector 5">
              <path
                d={svgPaths.p16b1ba80}
                shapeRendering="crispEdges"
                stroke="url(#paint3_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter4_d_1_1166)" id="Vector 1">
              <path
                d={svgPaths.p336b9700}
                shapeRendering="crispEdges"
                stroke="url(#paint4_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter5_d_1_1166)" id="Vector 2_2">
              <path
                d={svgPaths.p20cca1c0}
                shapeRendering="crispEdges"
                stroke="url(#paint5_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
            <g filter="url(#filter6_d_1_1166)" id="Vector 3_2">
              <path
                d={svgPaths.pecba600}
                shapeRendering="crispEdges"
                stroke="url(#paint6_linear_1_1166)"
                strokeWidth="1.32528"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter0_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter1_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="66.2642"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter2_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="132.528"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="11.9275"
              id="filter3_d_1_1166"
              width="563.609"
              x="50.4887"
              y="198.796"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter4_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="313.008"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter5_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="246.744"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="97.8558"
              id="filter6_d_1_1166"
              width="614.097"
              x="2.98023e-08"
              y="180.48"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.30113" />
              <feGaussianBlur stdDeviation="2.65056" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_1166"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1166"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="43.7361"
              y2="-23.8514"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="110"
              y2="42.4128"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="176.264"
              y2="108.677"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_1_1166"
              x1="55.7899"
              x2="62.8409"
              y1="199.959"
              y2="137.52"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="356.526"
              y2="424.113"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="290.261"
              y2="357.849"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_1_1166"
              x1="5.79311"
              x2="608.796"
              y1="223.998"
              y2="291.585"
            >
              <stop stopColor="#FE891F" />
              <stop
                offset="0.154705"
                stopColor="#3D2B2B"
                stopOpacity="0.8"
              />
              <stop
                offset="0.600962"
                stopColor="#868686"
                stopOpacity="0.1"
              />
              <stop
                offset="1"
                stopColor="#FE891F"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconBlack() {
  return (
    <div
      className="h-[82.544px] relative shrink-0 w-[82.702px]"
      data-name="icon-black"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 83 83"
      >
        <g id="icon-black">
          <path
            d={svgPaths.p210fe200}
            fill="var(--fill-0, #FFC795)"
            id="Union"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p152ff940}
            fill="var(--fill-0, #FE891F)"
            fillRule="evenodd"
            id="Union_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(126,62,4,0.3)] content-stretch flex flex-col gap-[13.253px] items-center justify-center relative rounded-[1325.28px] shrink-0 size-[192.166px]">
      <div
        aria-hidden="true"
        className="absolute border-[#ffc795] border-[1.988px] border-solid inset-0 pointer-events-none rounded-[1325.28px]"
      />
      <IconBlack />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[13.253px] items-center justify-center p-[50.361px] relative rounded-[2650.56px] shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(254,137,31,0.05)] relative rounded-[3975.84px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[13.253px] items-center justify-center p-[47.71px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function DevasignCore() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start left-[calc(50%-194.85px)] shadow-[0px_0px_55px_0px_#000000] size-[388.307px] top-[calc(50%-3.85px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="devasign.core"
    >
      <div className="absolute left-0 size-[388.307px] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 389 389"
        >
          <circle
            cx="194.154"
            cy="194.154"
            fill="var(--fill-0, black)"
            id="Ellipse 1"
            r="194.154"
          />
        </svg>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div
      className="absolute left-[279px] rounded-[200px] size-[20px] top-[420px]"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 20 20\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.30000001192092896\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(9.1849e-17 1.5 -1.5 -1.302e-16 10 10)\\\'><stop stop-color=\\\'rgba(254,137,31,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(203,109,25,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(152,82,19,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function Frame9() {
  return (
    <div
      className="absolute left-[115px] rounded-[200px] size-[30px] top-[115px]"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 30 30\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.30000001192092896\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.3777e-16 2.25 -2.25 -1.9529e-16 15 15)\\\'><stop stop-color=\\\'rgba(254,137,31,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(203,109,25,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(152,82,19,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function DevasignVector() {
  return (
    <div
      className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[610px] overflow-clip relative shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[48.558%] w-[830px]"
      data-name="devasign-vector"
    >
      <Right />
      <DevasignCore />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function GridBenefitSplit() {
  return (
    <div
      className="content-stretch flex gap-[50px] items-start relative shrink-0"
      data-name="Grid Benefit Split"
    >
      <BenefitSectionTitle />
      <DevasignVector />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Frame">
          <path
            d={svgPaths.p34fa1000}
            id="Vector"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d={svgPaths.p6f7c200}
            id="Vector_2"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Security Scanning</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Identify and flag potential security vulnerabilities
          before they enter your codebase.
        </p>
      </div>
    </div>
  );
}

function BenefitContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="Benefit Content"
    >
      <Container28 />
      <Container29 />
    </div>
  );
}

function BenefitItem() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Benefit Item"
    >
      <Frame />
      <BenefitContent />
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Frame">
          <path
            d={svgPaths.p16167c00}
            id="Vector"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d={svgPaths.p20f91200}
            id="Vector_2"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Custom Workflows</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Configure project-specific rules and thresholds for
          automated decisions.
        </p>
      </div>
    </div>
  );
}

function BenefitContent1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="Benefit Content"
    >
      <Container30 />
      <Container31 />
    </div>
  );
}

function BenefitItem1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Benefit Item"
    >
      <Frame5 />
      <BenefitContent1 />
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Frame">
          <path
            d={svgPaths.p12abce00}
            id="Vector"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d={svgPaths.p1e46b00}
            id="Vector_2"
            stroke="var(--stroke-0, #FB923C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Contributor Reward</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[16px] tracking-[-0.32px] w-full">
        <p className="leading-[25px]">
          Automatically calculate and distribute rewards based
          on contribution quality and complexity.
        </p>
      </div>
    </div>
  );
}

function BenefitContent2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="Benefit Content"
    >
      <Container32 />
      <Container33 />
    </div>
  );
}

function BenefitItem2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Benefit Item"
    >
      <Frame6 />
      <BenefitContent2 />
    </div>
  );
}

function GridBenefit() {
  return (
    <div
      className="content-stretch flex gap-[70px] items-start relative shrink-0 w-[1200px]"
      data-name="Grid Benefit"
    >
      <BenefitItem />
      <BenefitItem1 />
      <BenefitItem2 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-start px-[30px] py-0 relative w-full">
          <GridBenefitSplit />
          <GridBenefit />
        </div>
      </div>
    </div>
  );
}

function SectionBenefitSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Section - Benefit Section"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center pl-[330px] pr-0 py-[100px] relative w-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function BgImage1() {
  return (
    <div
      className="absolute bottom-[0.2px] left-0 right-0 top-0"
      data-name="BG Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[113.85%] left-0 max-w-none top-[-1.12%] w-full"
          src={imgBgImage1}
        />
      </div>
    </div>
  );
}

function PageSectionOverlay1() {
  return (
    <div
      className="absolute bg-[#070b15] inset-[-2.68%_-3%_-3.49%_-3%] opacity-50"
      data-name="Page Section Overlay"
    />
  );
}

function PageContentOverlayTop() {
  return (
    <div
      className="absolute bg-[#090603] blur-[35px] filter h-[330px] left-[-10%] right-[-10%] top-[-209.6px]"
      data-name="Page Content Overlay Top"
    />
  );
}

function Icon() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[30.058px]"
      data-name="icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 30"
      >
        <g id="icon">
          <path
            d={svgPaths.p177efd00}
            fill="var(--fill-0, #FFC795)"
            id="Union"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pffa9c00}
            fill="var(--fill-0, #FE891F)"
            fillRule="evenodd"
            id="Union_2"
          />
        </g>
      </svg>
    </div>
  );
}

function DevasignLogoFull() {
  return (
    <div
      className="content-stretch flex gap-[5.717px] items-center relative shrink-0 w-[145.608px]"
      data-name="devasign logo full"
    >
      <Icon />
      <p className="font-['Geist_Mono:UltraBlack',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25.363px] text-nowrap text-white tracking-[-1.6909px] whitespace-pre">
        DevAsign
      </p>
    </div>
  );
}

function DevasignWhite() {
  return (
    <div
      className="content-stretch flex flex-col gap-[0.953px] items-center justify-center relative shrink-0"
      data-name="devasign-white"
    >
      <DevasignLogoFull />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c4c4] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`© 2025 DevAsign, Inc. `}</p>
      </div>
    </div>
  );
}

function FooterItem() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip pb-[0.01px] pt-0 px-0 relative self-stretch shrink-0"
      data-name="Footer Item"
    >
      <DevasignWhite />
      <Container35 />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">
          GitHub
        </p>
      </div>
    </div>
  );
}

function FooterLink() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component2 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">X</p>
      </div>
    </div>
  );
}

function FooterLink1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">
          Discord
        </p>
      </div>
    </div>
  );
}

function FooterLink2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">
          LinkedIn
        </p>
      </div>
    </div>
  );
}

function FooterLink3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component7 />
    </div>
  );
}

function FooterLinkList() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Footer Link List"
    >
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
    </div>
  );
}

function FooterLinkItem() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Footer Link Item"
    >
      <div className="flex flex-col font-['Geist_Mono:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Social</p>
      </div>
      <FooterLinkList />
    </div>
  );
}

function Component8() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function FooterLink4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Component 3"
    >
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">
          Security
        </p>
      </div>
    </div>
  );
}

function FooterLink5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Footer Link"
    >
      <Component9 />
    </div>
  );
}

function FooterLinkList1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Footer Link List"
    >
      <FooterLink4 />
      <FooterLink5 />
    </div>
  );
}

function FooterLinkItem1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Footer Link Item"
    >
      <div className="flex flex-col font-['Geist_Mono:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] opacity-90 relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[normal]">Company</p>
      </div>
      <FooterLinkList1 />
    </div>
  );
}

function FooterItem1() {
  return (
    <div
      className="basis-0 content-stretch flex gap-[80px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Footer Item"
    >
      <FooterLinkItem />
      <FooterLinkItem1 />
    </div>
  );
}

function FooterWrap() {
  return (
    <div
      className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full"
      data-name="Footer Wrap"
    >
      <FooterItem />
      <FooterItem1 />
    </div>
  );
}

function FooterContentContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[139.99px] items-center max-w-[1220px] pb-0 pt-[30px] px-[30px] relative shrink-0 w-[1220px]"
      data-name="Footer Content → Container"
    >
      <FooterWrap />
    </div>
  );
}

function FooterFooter() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center overflow-clip pb-[150px] pt-[170px] px-0 relative shrink-0 w-[1920px]"
      data-name="Footer - Footer"
    >
      <BgImage1 />
      <PageSectionOverlay1 />
      <PageContentOverlayTop />
      <FooterContentContainer />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[30.058px]"
      data-name="icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 30"
      >
        <g id="icon">
          <path
            d={svgPaths.p177efd00}
            fill="var(--fill-0, #FFC795)"
            id="Union"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pffa9c00}
            fill="var(--fill-0, #FE891F)"
            fillRule="evenodd"
            id="Union_2"
          />
        </g>
      </svg>
    </div>
  );
}

function DevasignLogoFull1() {
  return (
    <div
      className="content-stretch flex gap-[5.717px] items-center relative shrink-0 w-[145.608px]"
      data-name="devasign logo full"
    >
      <Icon1 />
      <p className="font-['Geist_Mono:UltraBlack',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25.363px] text-nowrap text-white tracking-[-1.6909px] whitespace-pre">
        DevAsign
      </p>
    </div>
  );
}

function DevasignWhite1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[0.953px] items-center justify-center relative shrink-0"
      data-name="devasign-white"
    >
      <DevasignLogoFull1 />
    </div>
  );
}

function LinkBrand() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[213.75px]"
      data-name="Link - Brand"
    >
      <DevasignWhite1 />
    </div>
  );
}

function Github1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Github"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Github">
          <path
            d={svgPaths.p48b43e0}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Github1 />
      <div className="flex flex-col font-['Geist_Mono:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[15px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">25</p>
      </div>
    </div>
  );
}

function ButtonText2() {
  return (
    <div
      className="bg-[#fe891f] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[20px] py-[10px] relative shrink-0"
      data-name="Button Text"
    >
      <div className="flex flex-col font-['Geist_Mono:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#090603] text-[15px] text-nowrap tracking-[-0.3px]">
        <p className="leading-[normal] whitespace-pre">
          Join Waitlist
        </p>
      </div>
    </div>
  );
}

function NavRight() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-[213.75px]"
      data-name="Nav Right"
    >
      <Frame7 />
      <ButtonText2 />
    </div>
  );
}

function NavNavigation() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-full"
      data-name="Nav - Navigation"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[30px] py-0 relative w-full">
          <LinkBrand />
          <NavRight />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-1/2 max-w-[1260px] top-[40px] translate-x-[-50%] w-[1260px]"
      data-name="Container"
    >
      <NavNavigation />
    </div>
  );
}

export default function Desktop() {
  return (
    <div
      className="bg-[#090603] content-stretch flex flex-col items-start relative size-full"
      data-name="desktop"
    >
      <SectionHeroSection />
      <SectionHowItWorkSection />
      <SectionBenefitSection />
      <FooterFooter />
      <Container36 />
    </div>
  );
}