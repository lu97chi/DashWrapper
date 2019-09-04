// @flow
import React from 'react';
import { component } from 'rrsx';

type Props = {className: string };

const User = ({ className }: Props) => <div className={className}> user works </div>;

export default component<Props>(User);
