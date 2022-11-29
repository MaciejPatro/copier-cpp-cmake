FROM ubuntu:20.04

MAINTAINER Maciej Patro maciejpatro@gmail.com
LABEL description="Package which provides the tooling to build with clang-14."

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y ca-certificates
RUN echo "deb [trusted=yes] http://apt.llvm.org/focal/ llvm-toolchain-focal-14 main" | tee /etc/apt/sources.list.d/clang.list

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        build-essential \
		llvm-14 \
		clang-14 \
		lld-14 \
		libc++-14-dev \
		libc++abi-14-dev \
		python3 \
		python3-pip \
		curl \
		zip \
		unzip \
		git \
		tar && \
	rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --upgrade pip

RUN pip3 install --no-cache-dir \
		'cmake>=3.23' \
		'conan>=1.40.3' \
		ninja

RUN update-alternatives --install /usr/bin/clang clang /usr/bin/clang-14 100 && \
	update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-14 100
