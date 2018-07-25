#!/bin/bash
aws s3 cp . s3://mukilteo.pnwdiving.org/ --recursive --exclude ".git/*"
