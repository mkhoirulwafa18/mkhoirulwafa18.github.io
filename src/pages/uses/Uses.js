import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="My Setup"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="My Setup"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to Code and design things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the One Dark Pro Darker theme and Fira Code as
                    my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Microsoft Edge is my main browser for both development and general
                    use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://flutter.dev/">Flutter</Link> is my cross platform
                    mobile framework of choice. The cross-platform capabilities, efficient
                    development process, and robust UI toolkit make it an exciting choice
                    for modern app development.
                  </ListItem>
                  <ListItem>
                    I&apos;m Using{' '}
                    <Link href="https://github.com/mkhoirulwafa18/">GitHub</Link> as my
                    main version control system, because GitHub streamlines collaboration
                    and offers efficient code management and integration, making it an
                    ideal version control choice.
                  </ListItem>
                  <ListItem>
                    For Flutter animations I use{' '}
                    <Link href="https://pub.dev/packages/animations/">animations</Link>{' '}
                    package, it’s a great way to add my own animation sequences, but when
                    i need to work faster, i usually use{' '}
                    <Link href="https://pub.dev/packages/flutter_animate/">
                      flutter_animate
                    </Link>{' '}
                    package instead.
                  </ListItem>
                  <ListItem>
                    For unit & UI components testing in Flutter, I usually use{' '}
                    <Link href="https://pub.dev/packages/mocktail/">Mocktail</Link>. Just
                    because mocktail is so simple and mocks in Dart (with null-safety)
                    without the need for manual mocks or code generation.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. The Figma Community is really cool to explore.
                  </ListItem>
                  <ListItem>
                    Any graphics such as icon, ilustration, etc. I create are created in
                    Adobe Photoshop. So far I haven’t found a non-Adobe product that’s as
                    good. If anyone has suggestions please{' '}
                    <Link href="/contact">message me</Link>.
                  </ListItem>
                  <ListItem>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since I’m
                    currently learning to 3D modelling, i like how easy Blender is and
                    there is a bunch of tutorial out there to help.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>AMD Ryzen 5 3400G</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>AsRock AMD Radeon RX6600</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>PNY DDR4 XLR8 16GB (2x8GB) 3200Mhz KIT</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>AsRock B450M Steel Legend</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1080p ViewSonic VX2481-MH 75hz</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Rexus Daxa M82X Ultimate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G102</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″ (2022 M1 Max)</TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Cooler Master MH630</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
