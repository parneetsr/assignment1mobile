import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RbcBottomNavProps {
  onAlertPress: () => void;
}

export default function RbcBottomNav({ onAlertPress }: RbcBottomNavProps) {
  const notificationCount = 1; // 🔥 change this number anytime

  return (
    <View style={styles.navBarWrapper}>
      <View style={styles.bottomDockContainer} />
      <View style={styles.whiteCurveMask} />

      {/* ALERT BUTTON WITH BADGE */}
      <TouchableOpacity
        style={styles.yellowCenterButton}
        onPress={onAlertPress}
        activeOpacity={0.85}
      >
        <Text style={styles.yellowButtonText}>Alert</Text>

        {/* 🔴 BADGE */}
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {notificationCount > 9 ? "9+" : notificationCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {/* TABS */}
      <View style={styles.tabRow}>
        <TouchableOpacity style={styles.tabItemButton}>
          <Text style={[styles.tabItemText, styles.activeTab]}>
            H{"\n"}Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemButton}>
          <Text style={styles.tabItemText}>A{"\n"}Accounts</Text>
        </TouchableOpacity>

        <View style={{ width: 80 }} />

        <TouchableOpacity style={styles.tabItemButton}>
          <Text style={styles.tabItemText}>${"\n"}Move Money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemButton}>
          <Text style={styles.tabItemText}>={" \n"}More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    alignItems: "center",
    zIndex: 999,
  },

  bottomDockContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
  },

  whiteCurveMask: {
    position: "absolute",
    top: -18,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    zIndex: 1,
  },

  yellowCenterButton: {
    position: "absolute",
    top: -12,
    width: 80,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFD200",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 10,
  },

  yellowButtonText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },

  /* 🔴 BADGE STYLE */
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "red",
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 75,
  },

  tabItemButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },

  tabItemText: {
    fontSize: 11,
    color: "#666666",
    textAlign: "center",
    lineHeight: 16,
  },

  activeTab: {
    color: "#0051a2",
    fontWeight: "bold",
  },
});
