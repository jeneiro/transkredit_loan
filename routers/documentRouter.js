const router = require("express").Router();
const document = require("../controllers/documentController")
const multer = require("multer")
const auth = require("../middleware/auth");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

router.post("/:id",auth,document.addDocument);
router.get("/:id",auth,document.getAllDocuments);
router.get("/cooporate/:id",auth,document.getAllDocumentsByCooprorate);

router.post("/validate/:id",auth,document.validateDocument);

router.get("/download/:id/:itemID",auth,document.downloadDocuments);
router.post("/delete/:id/:itemID",auth,document.deleteDocument);

module.exports = router;