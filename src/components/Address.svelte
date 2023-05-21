<script lang="ts">
	export let recipientName: string;
	export let streetAddress: string;
	export let city: string;
	export let state: string;
	export let postalCode: string;
	export let country: string;
</script>

<h3>Address</h3>
  <div>
    <strong>Recipient Name:</strong> <span id="recipientName">{recipientName}</span><br>
    <strong>Street Address:</strong> <span id="streetAddress">{streetAddress}</span><br>
    <strong>City:</strong> <span id="city">{city}</span><br>
    <strong>State:</strong> <span id="state">{state}</span><br>
    <strong>Postal Code:</strong> <span id="postalCode">{postalCode}</span><br>
    <strong>Country:</strong> <span id="country">{country}</span><br>
  </div>

