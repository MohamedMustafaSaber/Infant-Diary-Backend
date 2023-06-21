const { ProtectedRoutes, AllowedTo } = require('../Auth/user.auth');
const { getPendingDoctors, getPendingHospitals, AccpetPendingDoctors, AccpetPendingHospitals, generateUserCountChart, blockParents, blockDoctors, blockhospitals } = require('./admin.services');

const router=require('express').Router();

router.route('/usersReport').get(ProtectedRoutes,AllowedTo('admin'),generateUserCountChart)
router.route('/PendingDoctors').get(ProtectedRoutes,AllowedTo('admin'),getPendingDoctors);
router.route('/PendingHospitals').get(ProtectedRoutes,AllowedTo('admin'),getPendingHospitals);
router.route('/blockParent/:parentID').put(ProtectedRoutes,AllowedTo('admin'),blockParents);
router.route('/blockDoctor/:DoctorID').put(ProtectedRoutes,AllowedTo('admin'),blockDoctors);
router.route('/blockhospital/:HospitalID').put(ProtectedRoutes,AllowedTo('admin'),blockhospitals);
router.route('/AcceptDoctor/:DoctorID').put(ProtectedRoutes,AllowedTo('admin'),AccpetPendingDoctors);
router.route('/AcceptHospital/:HospitalID').put(ProtectedRoutes,AllowedTo('admin'),AccpetPendingHospitals);
module.exports= router
