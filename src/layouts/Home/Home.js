import eemanTexture2Large from 'assets/apps/eeman-home-large.jpg';
import eemanTexture2Placeholder from 'assets/apps/eeman-home-placehoder.jpg';
import eemanTexture2 from 'assets/apps/eeman-home.jpg';
import eemanTextureLarge from 'assets/apps/eeman-prayer-time-large.jpg';
import eemanTexturePlaceholder from 'assets/apps/eeman-prayer-time-placehoder.jpg';
import eemanTexture from 'assets/apps/eeman-prayer-time.jpg';
import zwalletTexture2Large from 'assets/apps/zwallet-home-large.png';
import zwalletTexture2Placeholder from 'assets/apps/zwallet-home-placeholder.png';
import zwalletTexture2 from 'assets/apps/zwallet-home.png';
import zwalletTextureLarge from 'assets/apps/zwallet-topup-large.png';
import zwalletTexturePlaceholder from 'assets/apps/zwallet-topup-placeholder.png';
import zwalletTexture from 'assets/apps/zwallet-topup.png';
import expenseTexture2Large from 'assets/apps/expense-home.png';
import expenseTexture2Placeholder from 'assets/apps/expense-home.png';
import expenseTexture2 from 'assets/apps/expense-home.png';
import expenseTextureLarge from 'assets/apps/expense-statistic.png';
import expenseTexturePlaceholder from 'assets/apps/expense-statistic.png';
import expenseTexture from 'assets/apps/expense-statistic.png';
import modalrakyatTexture2Large from 'assets/apps/modalrakyat-home.png';
import modalrakyatTexture2Placeholder from 'assets/apps/modalrakyat-home.png';
import modalrakyatTexture2 from 'assets/apps/modalrakyat-home.png';
import modalrakyatTextureLarge from 'assets/apps/modalrakyat-statistic.png';
import modalrakyatTexturePlaceholder from 'assets/apps/modalrakyat-statistic.png';
import modalrakyatTexture from 'assets/apps/modalrakyat-statistic.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Flutter', 'React Native', 'React'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Developer"
        description="Website portfolio of Muhammad Khoirul Wafa — a Software Developer working on mobile apps with a focus on user experience, motion, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Eeman - Quran & Prayer Times"
        description="Islamic app that helps you carry out your daily prayers more easily and regularly."
        buttonText="View project"
        buttonLink="/projects/eeman"
        model={{
          type: 'phone',
          alt: 'Eeman - Quran & Prayer Times',
          textures: [
            {
              srcSet: [eemanTexture, eemanTextureLarge],
              placeholder: eemanTexturePlaceholder,
            },
            {
              srcSet: [eemanTexture2, eemanTexture2Large],
              placeholder: eemanTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Modal Rakyat - P2P Lenders' Assets"
        description="Peer-to-Peer Lending (P2P Lending) fintech company in Indonesia that connects Lenders (individuals) with MSMEs who need loans to develop their business."
        buttonText="View project"
        buttonLink="/projects/modalrakyat"
        model={{
          type: 'phone',
          alt: 'Modal Rakyat screen',
          textures: [
            {
              srcSet: [modalrakyatTexture, modalrakyatTextureLarge],
              placeholder: modalrakyatTexturePlaceholder,
            },
            {
              srcSet: [modalrakyatTexture2, modalrakyatTexture2Large],
              placeholder: modalrakyatTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Expense Manager Mobile App UI"
        description="Design and development of UI's for an Expense tracker app built in Flutter"
        buttonText="View on GitHub"
        buttonLink="https://github.com/mkhoirulwafa18/expense-manager"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [expenseTexture, expenseTextureLarge],
              placeholder: expenseTexturePlaceholder,
            },
            {
              srcSet: [expenseTexture2, expenseTexture2Large],
              placeholder: expenseTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Z-Wallet Mobile App"
        description="Design and development for an E-money app built in React Native"
        buttonText="View in GitHub"
        buttonLink="https://github.com/mkhoirulwafa/zwalletMobile"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [zwalletTexture, zwalletTextureLarge],
              placeholder: zwalletTexturePlaceholder,
            },
            {
              srcSet: [zwalletTexture2, zwalletTexture2Large],
              placeholder: zwalletTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
