#!/bin/bash
sed -i `echo "s<TARGET_HOST<${HOST}\/wsdl<g"` ./service.wsdl