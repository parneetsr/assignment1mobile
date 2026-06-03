import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import AccountsOverview from "../../components/AccountsOverview";
import QuickActionCards from "../../components/QuickActionCards";
import RbcBottomNav from "../../components/RbcBottomNav";
import RbcHeader from "../../components/RbcHeader";

export default function RbcClonedApp() {
  const [showAlertsPage, setShowAlertsPage] = useState(false);

  const handleAlertPress = () => {
    // switch “page” inside same screen
    setShowAlertsPage(true);
  };

  // 🔥 ALERT PAGE (fake screen inside same file)
  if (showAlertsPage) {
    return (
      <View style={styles.alertPageContainer}>
        <Text style={styles.alertTitle}>🚨 Alerts</Text>

        <Text style={styles.alertText}>You have no new alerts right now.</Text>

        <TouchableOpacity
          onPress={() => setShowAlertsPage(false)}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 🔥 HOME PAGE (your original UI)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0051a2" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <RbcHeader />
        <QuickActionCards />
        <AccountsOverview />

        <Text style={styles.blockHeader}>Needs Attention</Text>

        <View style={styles.attentionCard}>
          <View style={styles.attentionRow}>
            <View style={styles.scamTitleContainer}>
              <Text style={styles.scamLabel}>NOTICE:</Text>
              <Text style={styles.scamTitle}>
                Don't fall for a bank impersonation scam
              </Text>
            </View>
            <Text style={styles.dropdownArrow}>v</Text>
          </View>

          <Text style={styles.scamBody}>
            RBC will NEVER ask you to send money or give y...
          </Text>
        </View>

        <View style={styles.whatsNewContainer}>
          <Text style={styles.whatsNewText}>What's new in RBC Mobile</Text>

          <View style={styles.blueInfoCircle}>
            <Text style={styles.blueInfoText}>?</Text>
          </View>
        </View>
      </ScrollView>

      <RbcBottomNav onAlertPress={handleAlertPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F9",
  },

  scrollContent: {
    paddingBottom: 120,
  },

  blockHeader: {
    fontSize: 16,
    color: "#555555",
    paddingHorizontal: 16,
    marginTop: 14,
    marginBottom: 8,
  },

  attentionCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
  },

  attentionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scamTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  scamLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A32A2A",
    marginRight: 6,
  },

  scamTitle: {
    fontSize: 14,
    color: "#A32A2A",
  },

  dropdownArrow: {
    color: "#999999",
  },

  scamBody: {
    color: "#666666",
    paddingLeft: 54,
    fontSize: 13,
  },

  whatsNewContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
  },

  whatsNewText: {
    fontSize: 16,
    color: "#555555",
    marginRight: 6,
  },

  blueInfoCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0051a2",
    justifyContent: "center",
    alignItems: "center",
  },

  blueInfoText: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  // 🔥 ALERT PAGE STYLES
  alertPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F7F9",
  },

  alertTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  alertText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: "#0051a2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
