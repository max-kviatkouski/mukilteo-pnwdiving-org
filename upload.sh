#!/bin/bash
aws --profile kviatkouski s3 cp . s3://mukilteo.pnwdiving.org/ --recursive --exclude ".git/*" --exclude ".idea/*"
