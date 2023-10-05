import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageEemanFeatureBgLarge from 'assets/eeman-background-features.jpg';
import imageEemanFeatureBgPlaceholder from 'assets/eeman-background-features.jpg';
import imageEemanFeatureBg from 'assets/eeman-background-features.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import initialDesignDarkLarge from 'assets/apps/figma-initial.PNG';
import initialDesignDarkPlaceholder from 'assets/apps/figma-initial.PNG';
import initialDesignDark from 'assets/apps/figma-initial.PNG';
import initialDesignLightLarge from 'assets/apps/figma-initial.PNG';
import initialDesignLightPlaceholder from 'assets/apps/figma-initial.PNG';
import initialDesignLight from 'assets/apps/figma-initial.PNG';
import imageEemanDarkLarge from 'assets/apps/eeman-show-dark.png';
import imageEemanDarkPlaceholder from 'assets/apps/eeman-show-dark.png';
import imageEemanDark from 'assets/apps/eeman-show-dark.png';
import imageEemanLightLarge from 'assets/apps/eeman-show.png';
import imageEemanLightPlaceholder from 'assets/apps/eeman-show.png';
import imageEemanLight from 'assets/apps/eeman-show.png';
import eemanWalkthroughLarge from 'assets/apps/eeman.mp4';
import eemanWalkthroughPlaceholder from 'assets/apps/eeman.mp4';
import eemanWalkthrough from 'assets/apps/eeman.mp4';
import eemanSlide1Large from 'assets/apps/eeman/home.png';
import eemanSlide1 from 'assets/apps/eeman/home.png';
import eemanSlide2Large from 'assets/apps/eeman/dailydoa.png';
import eemanSlide2 from 'assets/apps/eeman/dailydoa.png';
import eemanSlide3Large from 'assets/apps/eeman/surahlist.png';
import eemanSlide3 from 'assets/apps/eeman/surahlist.png';
import eemanSlide4Large from 'assets/apps/eeman/quran.png';
import eemanSlide4 from 'assets/apps/eeman/quran.png';
import eemanSlide5Large from 'assets/apps/eeman/searchayat.png';
import eemanSlide5 from 'assets/apps/eeman/searchayat.png';
import eemanSlide6Large from 'assets/apps/eeman/prayertime.png';
import eemanSlide6 from 'assets/apps/eeman/prayertime.png';
import eemanSlide7Large from 'assets/apps/eeman/tasbih.png';
import eemanSlide7 from 'assets/apps/eeman/tasbih.png';
import eemanSlide8Large from 'assets/apps/eeman/feedback.png';
import eemanSlide8 from 'assets/apps/eeman/feedback.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Eeman.module.css';
import { Table, TableBody, TableCell, TableRow } from 'components/Table';
import { Button } from 'components/Button';

const title = 'Embrace an Islamic way of life more effectively.';
const description =
  "I built Eeman isn't just an app, it's a transformative tool tailored to enhance your connection with Islam and elevate your spiritual path. Crafted with a deep understanding of the needs of modern Muslims, Eeman stands as your steadfast companion in nurturing a fulfilling Islamic lifestyle.";
const roles = ['UX and UI Design', 'Mobile Development', 'Maintainer'];

const title2 = 'The Process of Making';
const description2 =
  'The creation of Eeman was a solo endeavor driven by my unwavering commitment to addressing a pressing need. Through meticulous research and dedication, I curated a comprehensive collection of daily supplications and Quranic verses. Collaborating closely with Islamic scholars, I ensured the authenticity and accuracy of the content. The development phase saw the creation of an intuitive interface, incorporating advanced features such as prayer time reminders and digital tasbeeh. Rigorous testing and user feedback allowed me to refine Eeman into a polished, user-centric app that reflects my dedication to excellence and the spiritual enrichment of each individual user.';
const roles2 = ['Flutter', 'Dart', 'BLOC State Management', 'Geocoding/Geolocator'];

export const Eeman = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Get The App"
          url="https://play.google.com/store/apps/details?id=com.wafastarz.eeman"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageEemanDark, imageEemanDarkLarge]
                  : [imageEemanLight, imageEemanLightLarge]
              }
              placeholder={
                isDark ? imageEemanDarkPlaceholder : imageEemanLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The App Showcase of Eeman with a mockup phone design."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In today&rsquo;s fast-paced world, maintaining a consistent connection with
              our faith can be challenging. With hectic schedules and constant
              distractions, many of us struggle to find the time and resources for regular
              Islamic practices. This void in our daily routine prompted the creation of
              Eeman. We developed this app to bridge the gap between our busy lives and
              our spiritual aspirations, providing a convenient and comprehensive solution
              that empowers users to effortlessly integrate essential Islamic practices
              into their daily routine, ensuring a more fulfilling and balanced lifestyle.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Eeman in Action</ProjectSectionHeading>
                <ProjectSectionText>
                  Experience Eeman&#39;s seamless functionality and witness how it
                  elevates your spiritual journey. Immerse yourself in the world of Eeman
                  and discover its user-friendly interface, powerful features, and the
                  ease with which it empowers your daily worship and spiritual growth.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: eemanWalkthrough, width: 1280 },
                  { src: eemanWalkthroughLarge, width: 2560 },
                ]}
                placeholder={eemanWalkthroughPlaceholder}
                alt="A demo of Eeman app in a video."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Visual Insights</ProjectSectionHeading>
              <ProjectSectionText>
                Explore Eeman&#39;s interface and dive into its rich features with my
                carefully curated screenshots. Get a comprehensive look at the app&#39;s
                design, functionality, and the ways it enhances your daily spiritual
                practices. Visualize how Eeman fits seamlessly into your faithful
                lifestyle.
              </ProjectSectionText>
            </ProjectTextRow>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide1, eemanSlide1Large]}
                      placeholder={eemanSlide1}
                      alt="Eeman app page home"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide2, eemanSlide2Large]}
                      placeholder={eemanSlide2}
                      alt="Eeman app page daily du'a"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide3, eemanSlide3Large]}
                      placeholder={eemanSlide3}
                      alt="Eeman app page surah list"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide4, eemanSlide4Large]}
                      placeholder={eemanSlide4}
                      alt="Eeman app page quran"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide5, eemanSlide5Large]}
                      placeholder={eemanSlide5}
                      alt="Eeman app page search ayat"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide6, eemanSlide6Large]}
                      placeholder={eemanSlide6}
                      alt="Eeman app page prayer time"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide7, eemanSlide7Large]}
                      placeholder={eemanSlide7}
                      alt="Eeman app page tasbih"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[eemanSlide8, eemanSlide8Large]}
                      placeholder={eemanSlide8}
                      alt="Eeman app page feedback"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageEemanFeatureBg, imageEemanFeatureBgLarge]}
                placeholder={imageEemanFeatureBgPlaceholder}
                alt="An islamic background quran."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Eeman Features</ProjectSectionHeading>
                  <ProjectSectionText>
                    Eeman, your ultimate Islamic companion, brings together a range of
                    features meticulously designed to elevate your spiritual journey:
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Daily Duas</b>: Access a curated collection of daily supplications,
                    empowering you to connect with Allah throughout your day.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Offline Quran</b>: Immerse yourself in the wisdom of the Quran
                    anytime, anywhere, even without an internet connection.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Prayer Times</b>: Stay connected with your faith through accurate
                    prayer time reminders tailored to your location.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Digital Tasbeeh</b>: Engage in effortless dhikr and supplication
                    with a digital tasbeeh, strengthening your spiritual bond.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Prayer Alarm</b>: Wake up to the serene sounds of the adhan or a
                    gentle alarm that marks the times of prayer.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <b>Intuitive Interface</b>: Navigate seamlessly through an easy-to-use
                    interface that enhances your experience.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Eeman combines these essential features to provide you with a
                    comprehensive tool for a more fulfilling and balanced Islamic
                    lifestyle. Embrace spirituality effortlessly and enrich your daily
                    routine with Eeman.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [initialDesignDark, initialDesignDarkLarge]
                  : [initialDesignLight, initialDesignLightLarge]
              }
              placeholder={
                isDark ? initialDesignDarkPlaceholder : initialDesignLightPlaceholder
              }
              alt={`A set of initial idea design system of the app`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>How I design the UI</ProjectSectionHeading>
              <ProjectSectionText>
                The above image i showed is the initial idea of mine on start building the
                UI of Eeman through Figma. My very first idea is to make the UI as
                appealing as i can that can build interest in users first sight. I
                believed going this way I can attract users by the user experience, ease
                of use and the appearance which is catchy on eye so the users does not
                feel it bored.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectHeader title={title2} description={description2} roles={roles2} />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Explore Eeman&#39;s Source Code
              </ProjectSectionHeading>
              <ProjectSectionText>
                Visit Eeman&#39;s GitHub repository to access the app Eeman&#39;s source
                code, contribute, and stay updated with enhancements. If you find Eeman
                valuable, consider starring the repository to show your support and help
                me grow.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                className={styles.linkButton}
                iconEnd="chevronRight"
                href="https://github.com/mkhoirulwafa18/quran_app"
              >
                View on GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
