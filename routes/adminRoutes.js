const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

// ---------------- GENERAL SETTINGS ----------------
router.post("/general", controller.createGeneralSettings);
router.get("/general/:id", controller.getGeneralSettings);
router.put("/general/:id", controller.updateGeneralSettings);
router.delete("/general/:id", controller.deleteGeneralSettings);

// ---------------- EMAIL SETTINGS ----------------
router.post("/email", controller.createEmailSettings);
router.get("/email/:id", controller.getEmailSettings);
router.put("/email/:id", controller.updateEmailSettings);
router.delete("/email/:id", async (req, res) => {
  try {
    const deleted = await EmailSettings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Email settings deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ---------------- SMS SETTINGS ----------------
router.post("/sms", controller.createSMSSettings);
router.get("/sms/:id", controller.getSMSSettings);
router.put("/sms/:id", controller.updateSMSSettings);
router.delete("/sms/:id", async (req, res) => {
  try {
    const deleted = await SMSSettings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "SMS settings deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ---------------- WHATSAPP SETTINGS ----------------
router.post("/whatsapp", controller.createWhatsAppSettings);
router.get("/whatsapp/:id", controller.getWhatsAppSettings);
router.put("/whatsapp/:id", controller.updateWhatsAppSettings);
router.delete("/whatsapp/:id", async (req, res) => {
  try {
    const deleted = await WhatsAppSettings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "WhatsApp settings deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ---------------- SECURITY SETTINGS ----------------
router.post("/security", controller.createSecuritySettings);
router.get("/security/:id", async (req, res) => {
  try {
    const sec = await SecuritySettings.findById(req.params.id);
    if (!sec) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: sec });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});
router.put("/security/:id", controller.updateSecuritySettings);
router.delete("/security/:id", async (req, res) => {
  try {
    const deleted = await SecuritySettings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Security settings deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ---------------- SYSTEM SETTINGS ----------------
router.post("/system", controller.createSystemSettings);
router.get("/system/:id", async (req, res) => {
  try {
    const sys = await SystemSettings.findById(req.params.id);
    if (!sys) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: sys });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});
router.put("/system/:id", controller.updateSystemSettings);
router.delete("/system/:id", async (req, res) => {
  try {
    const deleted = await SystemSettings.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "System settings deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ---------------- AUDIT LOGS ----------------
router.post("/audit", controller.createAuditLog);
router.get("/audit", controller.getAuditLogs);

module.exports = router;
