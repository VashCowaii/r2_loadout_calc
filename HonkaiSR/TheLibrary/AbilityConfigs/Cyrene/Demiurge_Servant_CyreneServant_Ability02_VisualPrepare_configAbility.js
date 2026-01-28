const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Servant_CyreneServant_FormationReset",
      "isTrigger": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_HasBeenInVeiwMode",
      "value": 1
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "Servant_CyreneServant_AbilityReady_MirrorSetup"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect"
    }
  ],
  "references": []
}