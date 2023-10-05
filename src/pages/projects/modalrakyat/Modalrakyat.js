import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageModalrakyat from 'assets/apps/modalrakyat-show.png';
import modalrakyatSlide1Large from 'assets/apps/modalrakyat/mr1.jpg';
import modalrakyatSlide1 from 'assets/apps/modalrakyat/mr1.jpg';
import modalrakyatSlide2Large from 'assets/apps/modalrakyat/mr2.jpg';
import modalrakyatSlide2 from 'assets/apps/modalrakyat/mr2.jpg';
import modalrakyatSlide3Large from 'assets/apps/modalrakyat/mr3.jpg';
import modalrakyatSlide3 from 'assets/apps/modalrakyat/mr3.jpg';
import modalrakyatSlide4Large from 'assets/apps/modalrakyat/mr4.jpg';
import modalrakyatSlide4 from 'assets/apps/modalrakyat/mr4.jpg';
import modalrakyatSlide5Large from 'assets/apps/modalrakyat/mr5.jpg';
import modalrakyatSlide5 from 'assets/apps/modalrakyat/mr5.jpg';
import modalrakyatSlide6Large from 'assets/apps/modalrakyat/mr6.jpg';
import modalrakyatSlide6 from 'assets/apps/modalrakyat/mr6.jpg';
import modalrakyatSlide7Large from 'assets/apps/modalrakyat/mr7.jpg';
import modalrakyatSlide7 from 'assets/apps/modalrakyat/mr7.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Modalrakyat.module.css';
import { Table, TableBody, TableCell, TableRow } from 'components/Table';
import { Button } from 'components/Button';

const title = 'Mutual Cooperation for Indonesian MSMEs.';
const description =
  'Modal Rakyat is an information technology-based money lending and borrowing service that brings together lenders and borrowers (MSMEs). Modal Rakyat offer secure online funding alternatives, minimal funding amounts, and attractive return rates. On the other hand, Modal Rakyat want to provide solutions for MSMEs who want to get loans practically, quickly and easily so that they can help develop the Indonesian economy.';
const roles = ['Mobile Developer', 'Maintainer'];

const title2 = 'The Process of Making';
const description2 =
  'During the journey, I became a part of an application development squad. The development of this app unfolded through multiple phases, and my involvement spanned from the pre-1.0.0 stages right through to the release. Crafting the maiden release for public consumption consumed roughly six months of our collective effort.';
const roles2 = ['React Native', 'AppCenter', 'Redux', 'Firebase'];

export const Modalrakyat = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

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
          url="#download"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[imageModalrakyat, imageModalrakyat]}
              placeholder={imageModalrakyat}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The App Showcase of Eeman with a mockup phone design."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Currently, Indonesia boasts more than 65.4 million micro, small, and
              medium-sized enterprises (MSMEs). Historically, these MSMEs have made a
              significant contribution to Indonesia&#39;s economy. Unfortunately, the full
              economic potential of these enterprises has not been maximized due to issues
              related to limited capital and resources. Many promising MSMEs could
              actually expand and contribute even more significantly if they had easier
              access to alternative sources of funding.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Visual Insights</ProjectSectionHeading>
              <ProjectSectionText>
                Explore Modal Rakyat&#39;s interface and dive into its rich features with
                our carefully curated screenshots. Get a comprehensive look at the
                app&#39;s design, functionality, and the ways it enhances your p2p lending
                experiences. Visualize how Modal Rakyat fits seamlessly into your
                financial lifestyle.
              </ProjectSectionText>
            </ProjectTextRow>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide1, modalrakyatSlide1Large]}
                      placeholder={modalrakyatSlide1}
                      alt="modalrakyat app page home"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide2, modalrakyatSlide2Large]}
                      placeholder={modalrakyatSlide2}
                      alt="modalrakyat app page daily du'a"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide3, modalrakyatSlide3Large]}
                      placeholder={modalrakyatSlide3}
                      alt="modalrakyat app page surah list"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide4, modalrakyatSlide4Large]}
                      placeholder={modalrakyatSlide4}
                      alt="modalrakyat app page quran"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide5, modalrakyatSlide5Large]}
                      placeholder={modalrakyatSlide5}
                      alt="modalrakyat app page search ayat"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide6, modalrakyatSlide6Large]}
                      placeholder={modalrakyatSlide6}
                      alt="modalrakyat app page prayer time"
                      sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      srcSet={[modalrakyatSlide7, modalrakyatSlide7Large]}
                      placeholder={modalrakyatSlide7}
                      alt="modalrakyat app page tasbih"
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
                srcSet={[backgroundSpr, backgroundSpr]}
                placeholder={backgroundSprPlaceholder}
                alt="A showcase of modalrakyat."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionContent width="full">
              <ProjectTextRow width="m">
                <ProjectSectionHeading>
                  Here&#39;s a glimpse of the tasks I undertook leading up to the final
                  iteration of the app:
                </ProjectSectionHeading>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>
                            - Communicate with the UI/UX and develop the UI of the app
                          </b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>
                            - Communicate with the Backend and integrate the API to the
                            app
                          </b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>
                            - Developing full features of Funding Statistic which showing
                            data visualization on the app
                          </b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>- Update the app to PlayStore, AppStore, & AppGallery</b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>- Fixing bugs, and improving performance of the app</b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <ProjectSectionText>
                          <b>
                            - Improve the Security of the app to pass the fintech app
                            penetration testing
                          </b>
                        </ProjectSectionText>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSection>
        </ThemeProvider>
        <ProjectHeader title={title2} description={description2} roles={roles2} />
        <ProjectSection id="download">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Get The App</ProjectSectionHeading>
            </ProjectTextRow>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button
                      secondary
                      iconHoverShift
                      className={styles.linkButton}
                      icon="chevronRight"
                      href="https://play.google.com/store/apps/details?id=com.modalrakyat.android"
                    >
                      Get The App on PlayStore
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button
                      secondary
                      iconHoverShift
                      className={styles.linkButton}
                      icon="chevronRight"
                      href="https://apps.apple.com/id/app/modal-rakyat/id1498413893"
                    >
                      Get The App on AppStore
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button
                      secondary
                      iconHoverShift
                      className={styles.linkButton}
                      icon="chevronRight"
                      href="https://appgallery.huawei.com/app/C102433621"
                    >
                      Get The App on AppGallery
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
