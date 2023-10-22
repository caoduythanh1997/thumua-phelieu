import * as mongoose from 'mongoose';

const connectMongoDB = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/thumuaphelieu_dev', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect MongoDB Success!');
	} catch (error) {
		console.log('Connect MongoDB Fail! =>' + error);
	}
};

export default connectMongoDB;
