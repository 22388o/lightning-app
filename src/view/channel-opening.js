import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Background from '../component/background';
import { Header, Title } from '../component/header';
import { SmallButton, BackButton } from '../component/button';
import MainContent from '../component/main-content';
import { ResizeableSpinner } from '../component/spinner';
import { H1Text, CopyText } from '../component/text';
import Icon from '../component/icon';
import { color } from '../component/style';

//
// Channel View
//

const size = 300;
const progressWidth = 15;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
  },
  spinnerWrapper: {
    margin: 20,
  },
  bolt: {
    height: 160,
    width: 80,
  },
});

const ChannelOpeningView = ({ channel, nav }) => (
  <Background color={color.blackDark}>
    <ChannelHeader
      goChannelCreate={() => channel.initCreate()}
      goHome={() => nav.goHome()}
    />
    <MainContent style={styles.content}>
      <View style={styles.spinnerWrapper}>
        <ResizeableSpinner
          percentage={1}
          size={size}
          progressWidth={progressWidth}
          gradient="openChannelsGrad"
        >
          <Icon image="lightning-bolt-gradient" style={styles.bolt} />
        </ResizeableSpinner>
      </View>
      <CopySection />
    </MainContent>
  </Background>
);

ChannelOpeningView.propTypes = {
  channel: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
};

//
// Channel Header
//

const headerStyles = StyleSheet.create({
  btnWrapperLeft: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnWrapperRight: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 24,
  },
  plusIcon: {
    height: 12,
    width: 12,
  },
});

const ChannelHeader = ({ goChannelCreate, goHome }) => (
  <Header separator>
    <View style={headerStyles.btnWrapperLeft}>
      <BackButton onPress={goHome} />
    </View>
    <Title title="Channels" />
    <View style={headerStyles.btnWrapperRight}>
      <SmallButton border text="Add" onPress={goChannelCreate}>
        <Icon image="plus" style={headerStyles.plusIcon} />
      </SmallButton>
    </View>
  </Header>
);

ChannelHeader.propTypes = {
  goChannelCreate: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
};

//
// Copy Section
//

const copyStyles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 60,
  },
  copyTxt: {
    textAlign: 'center',
    marginTop: 10,
    maxWidth: 450,
    marginBottom: 20,
  },
});

const CopySection = () => (
  <View style={copyStyles.wrapper}>
    <H1Text style={copyStyles.title}>Opening Channels</H1Text>
    <CopyText style={copyStyles.copyTxt}>
      {
        'The autopilot feature will open channels for you, but you can add your own at any time.'
      }
    </CopyText>
  </View>
);

export default ChannelOpeningView;
