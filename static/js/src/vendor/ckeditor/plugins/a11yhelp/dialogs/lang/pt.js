                                                                                                                                                                                                                                                                                                                                                                                                                                          � &L_Ap7L_AppDomainStatistics �#	MachineData5L_IntelligenceEvents��   	MachineData!��C   SQLite format 3   @   )�  �  s      P                                               )� .S`   �    ��/�Q�                                                                                                                                                                                                                                                                                                                                                                                                         �G55�1tableL_IntelligenceEventsL_IntelligenceEvents	CREATE TABLE L_IntelligenceEvents  (
		ID           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		Time         TIME    NOT NULL,
		ProviderID   INTEGER NOT NULL,
		Type         INTEGER NOT NULL,
		Category     INTEGER NOT NULL,
		EventToClear INTEGER,
		EAVData      JSON
	)�G55�1tableU_IntelligenceEventsU_IntelligenceEventsCREATE TABLE U_IntelligenceEvents  (
		ID           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		Time         TIME    NOT NULL,
		ProviderID   INTEGER NOT NULL,
		Type         INTEGER NOT NULL,
		Category     INTEGER NOT NULL,
		EventToClear INTEGER,
		EAVData      JSON
	)�77�AtableL_AppDomainStatisticsL_AppDomainStatisticsCREATE TABLE L_AppDomainStatistics  (
		ID                   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		Name                 TEXT    NOT NULL,
		Path                 TEXT    NOT NULL,
		Description          TEXT    NOT NULL,
		Type	             INTEGER NOT NULL,
		Category             TEXT    NOT NULL,
		Priority             INTEGER NOT NULL,
		TimeStart            TIME    NOT NULL,
		TimeEnd              TIME    NOT NULL,
		Duration             INTEGER NOT NULL,
		BandwidthUp          INTEGER NOT NULL,
		BandwidthDown        INTEGER NOT NULL,
		NetworkInterfaceType INTEGER NOT NULL,
		MACAddress           TEXT    NOT NULL,
		NetworkName          TEXT    NOT NULL,
		BSSID                TEXT    NOT NULL,
		APScore              INTEGER NOT NULL,
		CurrentProfile       TEXT    NOT NULL,
		PIId                 TEXT,
		PIIh                 TEXT
	)�77�AtableU_AppDomainStatisticsU_AppDomainStatisticsCREATE TABLE U_AppDomainStatistics  (
		ID                   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		Name                 TEXT    NOT NULL,
		Path                 TEXT    NOT NULL,
		Description          TEXT    NOT NULL,
		Type	             INTEGER NOT NULL,
		Category             TEXT    NOT NULL,
		Priority             INTEGER NOT NULL,
		TimeStart            TIME    NOT NULL,
		TimeEnd              TIME    NOT NULL,
		Duration             INTEGER NOT NULL,
		BandwidthUp          INTEGER NOT NULL,
		BandwidthDown        INTEGER NOT NULL,
		NetworkInterfaceType INTEGER NOT NULL,
		MACAddress           TEXT    NOT NULL,
		NetworkName          TEXT    NOT NULL,
		BSSID                TEXT    NOT NULL,
		APScore              INTEGER NOT NULL,
		CurrentProfile       TEXT    NOT NULL,
		PIId                 TEXT,
		PIIh                 TEXT
	)�11�AtableU_UserInteractionsU_UserInteractionsCREATE TABLE U_UserInteractions  (
		ID             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		Time           TIME    NOT NULL,
		Version        TEXT    NOT NULL,
		Location       INTEGER NOT NULL,
		Event          INTEGER NOT NULL,
		EventQualifier INTEGER NOT NULL,
		OldValue               NOT NULL,
		NewValue               NOT NULL,
		EventSpecific1         NOT NULL,
		EventSpecific2         NOT NULL,
		PIId                   TEXT,
		PIIh                   TEXT
	)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�##�}tableMachineDataMachineDataCREATE TABLE MachineData  (
		ID                   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		GUID               TEXT    NOT NULL UNIQUE,
		Country            TEXT    NOT NULL,
		SystemModel        TEXT    NOT NULL,
		SystemManufacturer TEXT    NOT NULL,
		RivetWired         INTEGER NOT NULL,
		RivetWireless      INTEGER NOT NULL,
		DBVersion          DOUBLE  NOT NULL
	)5I# indexsqlite_