module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class CusEvent extends egret.Event {
        public data: any;
		public constructor(type:string, data:any=null) {
            super(type);
            this.data = data;
		}
	}
}
