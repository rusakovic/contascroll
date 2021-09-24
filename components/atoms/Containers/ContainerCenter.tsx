import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface ContainerCenterProps {
  style?: ViewStyle;
  backgroundColor?: ViewStyle['backgroundColor'];
  alignItemsCenter?: boolean;
  flexDirectionRow?: boolean;
  justifyContentSpaceBetween?: boolean;
  isContainer?: boolean;
  isVerticalCenter?: boolean;
  isFullWidth?: boolean;
  isMarginVertical?: boolean;
  isMarginVertical1?: boolean;
  isMarginVertical2?: boolean;
  isMarginBottom?: boolean;
  isMarginTop?: boolean;
  paddingTopCustom?: number;
  paddingBottomCustom?: number;
  isPaddingTop10?: boolean;
  isPaddingTop20?: boolean;
  isPaddingTop30?: boolean;
  isPaddingTop40?: boolean;
  isPaddingBottom10?: boolean;
  isPaddingBottom20?: boolean;
  isPaddingBottom30?: boolean;
  isPaddingBottom40?: boolean;
  isPositionAbsolute?: boolean;
  width?: number | string;
  marginHorizontal10?: boolean;
  marginHorizontal15?: boolean;
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  backgroundColor: (backgroundColor: ViewStyle['backgroundColor']) => ({
    backgroundColor: backgroundColor,
  }),
  flexDirectionRow: {
    flexDirection: 'row',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  verticalCenter: {
    justifyContent: 'center',
    height: '100%',
  },
  isMarginVertical1: {
    marginVertical: hp(1),
  },
  isMarginVertical2: {
    marginVertical: hp(2),
  },
  marginVertical: {
    marginVertical: hp(3),
  },
  marginBottom: {
    marginBottom: hp(5),
  },
  marginTop: {
    marginTop: hp(5),
  },
  isFullWidth: {
    width: '100%',
  },
  isPositionAbsolute: {
    position: 'absolute',
    height: '100%',
  },
  paddingTopCustom: (
    paddingTopCustom: ContainerCenterProps['paddingTopCustom'],
  ) => ({
    paddingTop: paddingTopCustom,
  }),
  paddingBottomCustom: (
    paddingBottomCustom: ContainerCenterProps['paddingBottomCustom'],
  ) => ({
    paddingBottom: paddingBottomCustom,
  }),
  isPaddingTop10: {
    paddingTop: '10%',
  },
  isPaddingTop20: {
    paddingTop: '20%',
  },
  isPaddingTop30: {
    paddingTop: '30%',
  },
  isPaddingTop40: {
    paddingTop: '40%',
  },
  isPaddingBottom10: {
    paddingBottom: '10%',
  },
  isPaddingBottom20: {
    paddingBottom: '20%',
  },
  isPaddingBottom30: {
    paddingBottom: '30%',
  },
  isPaddingBottom40: {
    paddingBottom: '40%',
  },
  width: width => ({
    width: width,
  }),
  marginHorizontal10: {
    marginHorizontal: wp(10),
  },
  marginHorizontal15: {
    marginHorizontal: wp(15),
  },
});

const ContainerCenter: React.FunctionComponent<ContainerCenterProps> = ({
  children,
  style,
  alignItemsCenter,
  backgroundColor,
  flexDirectionRow,
  justifyContentSpaceBetween,
  isContainer,
  isFullWidth,
  isMarginVertical,
  isMarginVertical1,
  isMarginVertical2,
  isMarginBottom,
  isMarginTop,
  paddingTopCustom,
  paddingBottomCustom,
  isPaddingTop10,
  isPaddingTop20,
  isPaddingTop30,
  isPaddingTop40,
  isPaddingBottom10,
  isPaddingBottom20,
  isPaddingBottom30,
  isPaddingBottom40,
  isPositionAbsolute,
  isVerticalCenter,
  width,
  marginHorizontal10,
  marginHorizontal15,
}) => {
  const containerCenterStyle = [
    alignItemsCenter && styles.alignItemsCenter,
    !!backgroundColor && styles.backgroundColor(backgroundColor),
    isContainer && styles.container,
    isFullWidth && styles.isFullWidth,
    flexDirectionRow && styles.flexDirectionRow,
    justifyContentSpaceBetween && styles.justifyContentSpaceBetween,
    isMarginVertical && styles.marginVertical,
    isMarginVertical1 && styles.isMarginVertical1,
    isMarginVertical2 && styles.isMarginVertical2,
    isMarginBottom && styles.marginBottom,
    isMarginTop && styles.marginTop,
    isVerticalCenter && styles.verticalCenter,
    paddingTopCustom && styles.paddingTopCustom(paddingTopCustom),
    paddingBottomCustom && styles.paddingBottomCustom(paddingBottomCustom),
    isPaddingTop10 && styles.isPaddingTop10,
    isPaddingTop20 && styles.isPaddingTop20,
    isPaddingTop30 && styles.isPaddingTop30,
    isPaddingTop40 && styles.isPaddingTop40,
    isPaddingBottom10 && styles.isPaddingBottom10,
    isPaddingBottom20 && styles.isPaddingBottom20,
    isPaddingBottom30 && styles.isPaddingBottom30,
    isPaddingBottom40 && styles.isPaddingBottom40,
    isPositionAbsolute && styles.isPositionAbsolute,
    !!width && styles.width(width),
    marginHorizontal10 && styles.marginHorizontal10,
    marginHorizontal15 && styles.marginHorizontal15,
  ];
  return <View style={[containerCenterStyle, style]}>{children}</View>;
};

export default ContainerCenter;
